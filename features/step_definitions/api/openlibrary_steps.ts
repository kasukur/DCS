import { Given, When, Then } from '@cucumber/cucumber';
import assert from 'assert';
import { ApiCucumberWorld } from '../../../api/ApiWorld';
import { ApiClient } from '../../../api/ApiClient';

Given(
  'I have initialized the API client',
  async function (this: ApiCucumberWorld) {
    this.apiClient = new ApiClient();
  }
);

When(
  'I make a GET request to {string}',
  async function (this: ApiCucumberWorld, url: string) {
    try {
      this.lastResponse = await this.apiClient.get(url);
    } catch (error) {
      this.lastError = error;
      this.lastResponse = this.apiClient.getLastResponse();
    }
  }
);

Then(
  'the response status code should be {int}',
  async function (this: ApiCucumberWorld, expectedStatusCode: number) {
    const actualStatusCode = this.apiClient.getResponseStatus();
    assert.strictEqual(
      actualStatusCode,
      expectedStatusCode,
      `Expected status code ${expectedStatusCode} but got ${actualStatusCode}`
    );
  }
);

Then(
  'the response body should contain {string} with value {string}',
  async function (
    this: ApiCucumberWorld,
    fieldName: string,
    expectedValue: string
  ) {
    const responseData = this.apiClient.getResponseData();
    assert.notStrictEqual(
      responseData,
      null,
      'Response data should not be null'
    );
    assert.ok(
      responseData.hasOwnProperty(fieldName),
      `Response should have property ${fieldName}`
    );
    assert.strictEqual(
      responseData[fieldName],
      expectedValue,
      `Expected ${fieldName} to be "${expectedValue}" but got "${responseData[fieldName]}"`
    );
  }
);

Then(
  'the response body should contain {string} array with value {string}',
  async function (
    this: ApiCucumberWorld,
    fieldName: string,
    expectedValue: string
  ) {
    const responseData = this.apiClient.getResponseData();
    assert.notStrictEqual(
      responseData,
      null,
      'Response data should not be null'
    );
    assert.ok(
      responseData.hasOwnProperty(fieldName),
      `Response should have property ${fieldName}`
    );
    assert.ok(
      Array.isArray(responseData[fieldName]),
      `${fieldName} should be an array`
    );
    assert.ok(
      responseData[fieldName].includes(expectedValue),
      `Expected ${fieldName} array to contain "${expectedValue}" but it contains: ${JSON.stringify(
        responseData[fieldName]
      )}`
    );
  }
);
