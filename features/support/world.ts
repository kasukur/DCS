import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { ServiceNswPage } from '../../pages/ServiceNswPage';
import { MotorVehicleDutyPage } from '../../pages/MotorVehicleDutyPage';
import { ResultModalPage } from '../../pages/ResultModalPage';

export interface CucumberWorld extends World {
  browser: Browser;
  context: BrowserContext;
  page: Page;
  serviceNswPage: ServiceNswPage;
  motorVehicleDutyPage: MotorVehicleDutyPage;
  resultModalPage: ResultModalPage;
}

export class CustomWorld extends World implements CucumberWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  serviceNswPage!: ServiceNswPage;
  motorVehicleDutyPage!: MotorVehicleDutyPage;
  resultModalPage!: ResultModalPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    this.browser = await chromium.launch({
      headless: process.env.HEADLESS !== 'false',
      slowMo: 100,
    });
    this.context = await this.browser.newContext({
      viewport: { width: 1280, height: 720 },
    });
    this.page = await this.context.newPage();

    this.serviceNswPage = new ServiceNswPage(this.page);
    this.motorVehicleDutyPage = new MotorVehicleDutyPage(this.page);
    this.resultModalPage = new ResultModalPage(this.page);
  }

  async cleanup(): Promise<void> {
    if (this.context) {
      await this.context.close();
    }
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
