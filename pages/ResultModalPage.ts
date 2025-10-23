import { Page, Locator, expect } from '@playwright/test';

export class ResultModalPage {
  readonly page: Page;
  readonly modalContent: Locator;
  readonly modalHeader: Locator;
  readonly modalTitle: Locator;
  readonly closeButton: Locator;
  readonly printIcon: Locator;
  readonly modalBody: Locator;
  readonly resultTable: Locator;
  readonly detailsEnteredSection: Locator;
  readonly passengerVehicleRow: Locator;
  readonly purchasePriceRow: Locator;
  readonly dutyPayableRow: Locator;
  readonly modalFooter: Locator;
  readonly closeFooterButton: Locator;
  readonly noteText: Locator;
  readonly contactLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalContent = page.locator('.modal-content');
    this.modalHeader = page.locator('.modal-header');
    this.modalTitle = page.locator('.modal-title');
    this.closeButton = page.locator('.close');
    this.printIcon = page.locator('.print-icon .fa.fa-print');
    this.modalBody = page.locator('.modal-body');
    this.resultTable = page.locator('.TableApp');
    this.detailsEnteredSection = page.locator('.alert.alert-info');
    this.passengerVehicleRow = page.locator(
      'tr:has-text("Is this registration for a passenger vehicle?")'
    );
    this.purchasePriceRow = page.locator(
      'tr:has-text("Purchase price or value")'
    );
    this.dutyPayableRow = page.locator('tr:has-text("Duty payable")');
    this.modalFooter = page.locator('.modal-footer');
    this.closeFooterButton = page.locator(
      '.modal-footer button[data-dismiss="modal"]'
    );
    this.noteText = page.locator(
      'p:has-text("All amounts are in Australian dollars")'
    );
    this.contactLink = page.locator('.modal-body a[href*="contact"]');
  }

  async validateModalStructure(): Promise<void> {
    // Validate modal content wrapper
    await expect(this.modalContent).toBeVisible();

    // Validate modal header
    await expect(this.modalHeader).toBeVisible();
    await expect(this.modalTitle).toContainText('Calculation');
    await expect(this.closeButton).toBeVisible();
    await expect(this.printIcon).toBeVisible();

    // Validate modal body
    await expect(this.modalBody).toBeVisible();
    await expect(this.detailsEnteredSection).toBeVisible();
    await expect(this.resultTable).toBeVisible();

    // Validate modal footer
    await expect(this.modalFooter).toBeVisible();
    await expect(this.closeFooterButton).toBeVisible();

    // Validate note and contact link
    await expect(this.noteText).toBeVisible();
    await expect(this.contactLink).toBeVisible();
  }

  async validateCalculationResult(
    passengerVehicle: string,
    purchasePrice: string,
    expectedDuty: string
  ): Promise<void> {
    // Validate passenger vehicle selection
    const passengerCell = this.passengerVehicleRow.locator('td.right');
    await expect(passengerCell).toContainText(passengerVehicle);

    // Validate purchase price
    const priceCell = this.purchasePriceRow.locator('td.right');
    await expect(priceCell).toContainText(purchasePrice);

    // Validate duty payable
    const dutyCell = this.dutyPayableRow.locator('td.right');
    await expect(dutyCell).toContainText(expectedDuty);
  }

  async closeModal(): Promise<void> {
    await this.closeFooterButton.click();
    await this.page.waitForSelector('.modal-content', { state: 'hidden' });
  }
}
