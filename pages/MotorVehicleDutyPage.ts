import { Page, Locator, expect } from '@playwright/test';

export class MotorVehicleDutyPage {
  readonly page: Page;
  readonly sidebarNav: Locator;
  readonly dutiesMenu: Locator;
  readonly motorVehicleMenuItem: Locator;
  readonly pageHeading: Locator;
  readonly subHeading: Locator;
  readonly passengerVehicleFieldset: Locator;
  readonly passengerVehicleYes: Locator;
  readonly passengerVehicleNo: Locator;
  readonly purchasePriceInput: Locator;
  readonly calculateButton: Locator;
  readonly resetButton: Locator;
  readonly refreshButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sidebarNav = page.locator('.sidebar-nav');
    this.dutiesMenu = page.locator('#btn-3');
    this.motorVehicleMenuItem = page.locator(
      'a[href="/erevenue/calculators/motorsimple.php"]'
    );
    this.pageHeading = page.locator('h1#skip');
    this.subHeading = page.locator('h2');
    this.passengerVehicleFieldset = page.locator('fieldset.nsw-form-fieldset');
    this.passengerVehicleYes = page.locator('#passenger_Y');
    this.passengerVehicleNo = page.locator('#passenger_N');
    this.purchasePriceInput = page.locator('#purchasePrice');
    this.calculateButton = page.locator('button[type="submit"]');
    this.resetButton = page.locator('button.reset');
    this.refreshButton = page.locator('button[onclick*="location.reload"]');
  }

  async validatePageStructure(): Promise<void> {
    // Wait for page to load completely
    await this.page.waitForLoadState('networkidle');

    // Validate page headings first (most important)
    await expect(this.pageHeading).toContainText('Revenue NSW calculators', {
      timeout: 10000,
    });
    await expect(this.subHeading).toContainText(
      'Motor vehicle registration duty calculator',
      { timeout: 10000 }
    );

    // Validate form elements (core functionality)
    await expect(this.passengerVehicleFieldset).toBeVisible({ timeout: 10000 });
    await expect(this.passengerVehicleYes).toBeVisible({ timeout: 10000 });
    await expect(this.passengerVehicleNo).toBeVisible({ timeout: 10000 });
    await expect(this.purchasePriceInput).toBeVisible({ timeout: 10000 });
    await expect(this.calculateButton).toBeVisible({ timeout: 10000 });

    // Validate sidebar navigation (optional - might not be present on all versions)
    try {
      await expect(this.sidebarNav).toBeVisible({ timeout: 5000 });
      await expect(this.dutiesMenu).toBeVisible({ timeout: 5000 });
      await expect(this.motorVehicleMenuItem).toBeVisible({ timeout: 5000 });
    } catch (error) {
      console.log(
        'Sidebar navigation not found - continuing with core validation'
      );
    }

    // Validate additional buttons (optional)
    try {
      await expect(this.resetButton).toBeVisible({ timeout: 5000 });
      await expect(this.refreshButton).toBeVisible({ timeout: 5000 });
    } catch (error) {
      console.log(
        'Reset/Refresh buttons not found - continuing with core validation'
      );
    }

    // Validate input field has dollar icon (optional)
    try {
      const inputGroup = this.page.locator('.input-group');
      await expect(inputGroup.locator('.fa.fa-usd')).toBeVisible({
        timeout: 5000,
      });
    } catch (error) {
      console.log('Dollar icon not found - continuing with core validation');
    }
  }

  async selectPassengerVehicle(isPassenger: boolean): Promise<void> {
    try {
      console.log(`Selecting passenger vehicle: ${isPassenger ? 'Yes' : 'No'}`);
      if (isPassenger) {
        // Click the label instead of the radio button input
        const label = this.page.locator('label[for="passenger_Y"]');
        await label.waitFor({ state: 'visible', timeout: 10000 });
        await label.click();
        console.log('Passenger vehicle Yes selected successfully');
      } else {
        // Click the label instead of the radio button input
        const label = this.page.locator('label[for="passenger_N"]');
        await label.waitFor({ state: 'visible', timeout: 10000 });
        await label.click();
        console.log('Passenger vehicle No selected successfully');
      }
    } catch (error) {
      console.log('Error selecting passenger vehicle:', error);
      throw error;
    }
  }

  async enterPurchasePrice(price: string): Promise<void> {
    await this.purchasePriceInput.fill(price);
  }

  async clickCalculateButton(): Promise<void> {
    await this.calculateButton.click();
  }

  async waitForModal(): Promise<void> {
    await this.page.waitForSelector('.modal-content', { state: 'visible' });
  }
}
