const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const fs = require('fs');

const jsonDir = path.join(__dirname, 'reports', 'cucumber-json');
const reportDir = path.join(__dirname, 'reports', 'cucumber-html-report');

// 🧩 Check that the folder exists and contains JSONs
if (!fs.existsSync(jsonDir)) {
  console.error(`❌ JSON directory not found: ${jsonDir}`);
  process.exit(1);
}

const jsonFiles = fs.readdirSync(jsonDir).filter(f => f.endsWith('.json'));
if (jsonFiles.length === 0) {
  console.error(`❌ No JSON files found in: ${jsonDir}`);
  process.exit(1);
}

// ✅ Generate the HTML report
report.generate({
  jsonDir,
  reportPath: reportDir,
  pageTitle: 'BDD Automation Report',
  reportName: 'Motor Vehicle Duty Automation',
  displayDuration: true,
  openReportInBrowser: false,
  metadata: {
    browser: { name: 'chrome', version: 'latest' },
    device: 'Local Test Machine',
    platform: { name: 'macOS', version: '12.6' },
  },
  customData: {
    title: 'Execution Info',
    data: [
      { label: 'Environment', value: process.env.ENV || 'QA' },
      { label: 'Generated on', value: new Date().toLocaleString() },
    ],
  },
});

console.log(`✅ HTML report generated at: ${reportDir}`);
