# 🚗 BDD Motor Vehicle Automation

This project implements **Behavior-Driven Development (BDD)** automation for the **NSW Motor Vehicle Stamp Duty Calculator**, using **Cucumber**, **TypeScript**, and **Playwright**.  
It provides **comprehensive test reporting** for both **UI** and **API** tests, including HTML, JSON, and XML outputs suitable for CI/CD integration.

---

## 📦 Prerequisites

- Node.js **v16+**
- npm or yarn
- Git (for version control)
- Modern browser (for report viewing)

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/<your-org>/bdd-motor-vehicle-automation.git
cd bdd-motor-vehicle-automation

# Install dependencies
npm install
```

---

## 🚀 Running Tests

### Quick Commands

```bash
# Run all tests with comprehensive reporting
npm run test:comprehensive

# Run only API tests
npm run test:api

# Run only UI tests
npm run test:ui

# Generate reports from existing JSON files
npm run report:generate

# Open HTML reports in the browser
npm run report:open
npm run playwright:report
```

### Individual Test Execution

```bash
# API Tests (pretty formatting)
cucumber-js --config cucumber-api.config.js

# UI Tests (pretty formatting)
cucumber-js --profile ui

# Playwright tests with HTML report
npx playwright test --reporter=html
```

---

## 🧩 Project Structure

```
├── features/
│   ├── motor_vehicle_duty.feature     # BDD feature file
│   ├── step_definitions/
│   │   └── motor_vehicle_steps.ts     # Step definitions
│   └── support/
│       ├── world.ts                   # Custom World for Playwright
│       └── hooks.ts                   # Before/After hooks
├── pages/
│   ├── ServiceNswPage.ts              # Service NSW page object
│   ├── MotorVehicleDutyPage.ts        # Calculator page object
│   └── ResultModalPage.ts             # Result modal page object
├── reports/                           # Test reports and screenshots
├── configs/
│   ├── cucumber-api.config.js
│   ├── cucumber-ui.config.js
│   └── playwright.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧪 Test Scenarios

Automation covers:

1. **Navigation** — Click “Check online” button from Service NSW page
2. **Page Validation** — Verify Motor Vehicle Registration calculator page
3. **Form Interaction** — Select vehicle type and enter purchase price
4. **Calculation** — Trigger calculation and validate the result modal
5. **Result Validation** — Verify full modal structure and results

### Example Test Data

| Vehicle Price | Expected Duty |
| ------------- | ------------- |
| $10,000       | $300          |
| $24,999       | $750          |
| $50,000       | $1,500        |
| $100,000      | $3,000        |

---

## 📊 Comprehensive Test Reporting

This project includes multiple reporting solutions providing detailed insights into test execution and results.

### 1. **Cucumber HTML Reports**

- **Location**: `reports/cucumber-html-report/index.html`
- **Features**:
  - Interactive test results
  - Step-by-step execution details
  - Pass/fail statistics
  - Execution timeline
  - Screenshots and attachments

### 2. **Playwright HTML Reports**

- **Location**: `reports/playwright-report/index.html`
- **Features**:
  - Beautiful test execution timeline
  - Screenshots and videos
  - Network requests and responses
  - Performance metrics
  - Traces and artifacts

### 3. **JSON Reports**

- **Files**:
  - `reports/cucumber-report.json`
  - `reports/cucumber-ui-report.json`
  - `reports/cucumber-api-report.json`
  - `reports/playwright-results.json`
- **Usage**: For CI/CD integration and custom dashboards

### 4. **JUnit XML Reports**

- **File**: `reports/playwright-results.xml`
- **Usage**: Compatible with Jenkins, Azure DevOps, GitHub Actions, etc.

---

## 📁 Report Directory Layout

```
reports/
├── cucumber-html-report/           # Full Cucumber HTML report
│   ├── index.html
│   ├── assets/
│   └── data/
├── cucumber-api-report.html        # API-specific report
├── cucumber-ui-report.html         # UI-specific report
├── playwright-report/              # Playwright HTML report
│   ├── index.html
│   └── data/
├── screenshots/                    # Test screenshots
├── *.json                          # JSON test results
└── playwright-results.xml          # JUnit XML format
```

---

## 🎨 Report Features

### 🥒 Cucumber Reports

- ✅ Test Execution Timeline
- ✅ Step-by-step details
- ✅ Pass/fail summary
- ✅ Feature coverage
- ✅ Custom metadata
- ✅ Responsive layout

### 🎭 Playwright Reports

- 🎬 Video recordings
- 📸 Screenshots
- 🌐 Network logs
- ⚡ Performance metrics
- 🔍 Trace viewer
- 📊 Execution timeline

---

## 🔧 Customization

### Custom Data in Reports

You can add project metadata in `report-generator.js`:

```javascript
customData: {
  title: 'Motor Vehicle Duty Automation',
  data: [
    { label: 'Environment', value: 'Production' },
    { label: 'Build Number', value: process.env.BUILD_NUMBER },
    { label: 'Team', value: 'QA Automation' }
  ]
}
```

### Playwright Configuration Example

`playwright.config.js`:

```javascript
reporter: [
  ['html', { outputFolder: 'reports/playwright-report' }],
  ['json', { outputFile: 'reports/playwright-results.json' }],
  ['junit', { outputFile: 'reports/playwright-results.xml' }],
  ['github'], // for GitHub Actions
  ['allure'], // optional - for Allure reports
];
```

---

## ⚙️ CI/CD Integration

### 🧩 GitHub Actions

```yaml
- name: Run Tests
  run: npm run test:comprehensive

- name: Upload Reports
  uses: actions/upload-artifact@v3
  with:
    name: test-reports
    path: reports/
```

### 💡 Jenkins Pipeline Example

```groovy
stage('Run Tests') {
  steps {
    sh 'npm run test:comprehensive'
    publishHTML([
      allowMissing: false,
      alwaysLinkToLastBuild: true,
      keepAll: true,
      reportDir: 'reports',
      reportFiles: 'cucumber-html-report/index.html',
      reportName: 'Cucumber Test Report'
    ])
  }
}
```
