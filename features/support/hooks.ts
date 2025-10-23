import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { CustomWorld } from './world';

BeforeAll(async function () {
  console.log('Starting BDD Motor Vehicle Automation Tests');
});

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === 'FAILED') {
    const screenshot = await this.page.screenshot({
      path: `reports/screenshots/failed-${
        scenario.pickle.name
      }-${Date.now()}.png`,
      fullPage: true,
    });
    console.log(
      `Screenshot saved for failed scenario: ${scenario.pickle.name}`
    );
  }
  await this.cleanup();
});

AfterAll(async function () {
  console.log('BDD Motor Vehicle Automation Tests Completed');
});
