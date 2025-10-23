import { Page, Locator } from '@playwright/test';

export class ServiceNswPage {
  readonly page: Page;
  readonly checkOnlineButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkOnlineButton = page.locator(
      'a.button.button--primary.is-external[href*="motorsimple.php"]'
    );
  }

  async navigateToServiceNsw(): Promise<void> {
    try {
      console.log('Navigating to Service NSW page...');
      await this.page.goto(
        'https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty',
        {
          waitUntil: 'domcontentloaded',
          timeout: 60000,
        }
      );
      console.log('Page loaded, waiting for Check online button...');
      await this.checkOnlineButton.waitFor({
        state: 'visible',
        timeout: 30000,
      });
      console.log(
        'Check online button is ready - navigation completed successfully'
      );
    } catch (error) {
      console.log('Navigation failed:', error);
      throw error;
    }
  }

  async clickCheckOnlineButton(): Promise<void> {
    await this.checkOnlineButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.checkOnlineButton.click();
    await this.page.waitForLoadState('load', { timeout: 10000 });
  }

  async waitForNavigation(): Promise<void> {
    await this.page.waitForURL('**/motorsimple.php');
  }
}
