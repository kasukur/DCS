import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given(
  'I navigate to the Service NSW Motor Vehicle Stamp Duty page',
  { timeout: 60000 },
  async function (this: CustomWorld) {
    await this.serviceNswPage.navigateToServiceNsw();
  }
);

When(
  'I click the {string} button',
  async function (this: CustomWorld, buttonText: string) {
    if (buttonText === 'Check online') {
      await this.serviceNswPage.clickCheckOnlineButton();
      await this.serviceNswPage.waitForNavigation();
    } else if (buttonText === 'Calculate') {
      await this.motorVehicleDutyPage.clickCalculateButton();
      await this.motorVehicleDutyPage.waitForModal();
    }
  }
);

When('I click the Calculate button', async function (this: CustomWorld) {
  await this.motorVehicleDutyPage.clickCalculateButton();
  await this.motorVehicleDutyPage.waitForModal();
});

Then(
  'I should see the Motor Vehicle Registration calculator page with proper structure',
  async function (this: CustomWorld) {
    await this.motorVehicleDutyPage.validatePageStructure();
  }
);

When(
  'I select {string} for passenger vehicle',
  { timeout: 30000 },
  async function (this: CustomWorld, passengerVehicle: string) {
    const isPassenger = passengerVehicle === 'Yes';
    await this.motorVehicleDutyPage.selectPassengerVehicle(isPassenger);
  }
);

When(
  'I enter {string} as the purchase price',
  async function (this: CustomWorld, purchasePrice: string) {
    await this.motorVehicleDutyPage.enterPurchasePrice(purchasePrice);
  }
);

Then(
  'I should see the calculation result modal with:',
  { timeout: 30000 },
  async function (this: CustomWorld, dataTable) {
    // Validate modal structure first
    console.log('Validating modal structure...');
    await this.resultModalPage.validateModalStructure();
    console.log('Modal structure validation completed');

    // Get expected values from data table
    const expectedValues = dataTable.hashes();

    // Find the specific values by Field name
    const passengerVehicleRow = expectedValues.find(
      (row: any) => row['Field'] === 'Passenger Vehicle'
    );
    const purchasePriceRow = expectedValues.find(
      (row: any) => row['Field'] === 'Purchase Price'
    );
    const dutyPayableRow = expectedValues.find(
      (row: any) => row['Field'] === 'Duty Payable'
    );

    const passengerVehicle = passengerVehicleRow?.['Expected Value'];
    const purchasePrice = purchasePriceRow?.['Expected Value'];
    const expectedDuty = dutyPayableRow?.['Expected Value'];

    console.log('Expected values:', {
      passengerVehicle,
      purchasePrice,
      expectedDuty,
    });

    // Validate calculation results
    await this.resultModalPage.validateCalculationResult(
      passengerVehicle,
      purchasePrice,
      expectedDuty
    );
  }
);

// Additional step for closing modal (optional)
When('I close the result modal', async function (this: CustomWorld) {
  await this.resultModalPage.closeModal();
});
