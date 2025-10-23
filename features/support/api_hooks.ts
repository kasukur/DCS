import { Before, After } from '@cucumber/cucumber';
import { ApiWorld } from '../../api/ApiWorld';

Before(async function (this: ApiWorld) {
  await this.init();
});

After(async function (this: ApiWorld) {
  await this.cleanup();
});
