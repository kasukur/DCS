import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { ApiClient } from './ApiClient';

export interface ApiCucumberWorld extends World {
  apiClient: ApiClient;
  lastResponse: any;
  lastError: any;
  init(): Promise<void>;
  cleanup(): Promise<void>;
}

export class ApiWorld extends World implements ApiCucumberWorld {
  apiClient!: ApiClient;
  lastResponse: any = null;
  lastError: any = null;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init(): Promise<void> {
    this.apiClient = new ApiClient();
  }

  async cleanup(): Promise<void> {
    // Cleanup resources if needed
    // No browser cleanup required for API tests
  }
}

setWorldConstructor(ApiWorld);
