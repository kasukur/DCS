const config = {
  default: {
    require: [
      'features/step_definitions/**/*.ts',
      'features/support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'json:reports/cucumber-report.json',
      'html:reports/cucumber-report.html'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true,
    dryRun: false,
    strict: true,
    failFast: false,
    parallel: 1,
    retry: 1,
    timeout: 60000,
    worldParameters: {
      headless: process.env.HEADLESS !== 'false'
    }
  },
  ui: {
    require: [
      'features/step_definitions/**/*.ts',
      'features/support/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'json:reports/cucumber-ui-report.json',
      'html:reports/cucumber-ui-report.html'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true,
    dryRun: false,
    strict: true,
    failFast: false,
    parallel: 1,
    retry: 1,
    timeout: 60000,
    worldParameters: {
      headless: process.env.HEADLESS !== 'false'
    },
    paths: ['features/motor_vehicle_duty.feature']
  },
  api: {
    require: [
      'features/step_definitions/api/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'json:reports/cucumber-api-report.json',
      'html:reports/cucumber-api-report.html'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    publishQuiet: true,
    dryRun: false,
    strict: true,
    failFast: false,
    parallel: 1,
    retry: 1,
    timeout: 30000,
    paths: ['features/api/**/*.feature']
  }
};

module.exports = config;
