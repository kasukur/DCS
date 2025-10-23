const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

class TestRunner {
  constructor() {
    this.reportsDir = path.join(__dirname, 'reports');
    this.ensureReportsDir();
  }

  ensureReportsDir() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  runCommand(command, description) {
    console.log(`\n🚀 ${description}`);
    console.log(`📝 Command: ${command}`);
    console.log('='.repeat(60));
    
    try {
      const startTime = Date.now();
      execSync(command, { stdio: 'inherit', cwd: __dirname });
      const duration = ((Date.now() - startTime) / 1000).toFixed(2);
      console.log(`✅ ${description} completed in ${duration}s`);
      return true;
    } catch (error) {
      console.error(`❌ ${description} failed:`, error.message);
      return false;
    }
  }

  async runApiTests() {
    console.log('\n🌐 Starting API Tests...');
    const success = this.runCommand(
      'npm run test:api',
      'API Test Execution'
    );
    return success;
  }

  async runUiTests() {
    console.log('\n🖥️  Starting UI Tests...');
    const success = this.runCommand(
      'npm run test:ui',
      'UI Test Execution'
    );
    return success;
  }

  generateReports() {
    console.log('\n📊 Generating Comprehensive Reports...');
    
    // Generate HTML reports using multiple-cucumber-html-reporter
    this.runCommand(
      'node report-generator.js',
      'HTML Report Generation'
    );

    console.log('\n📈 Report Summary:');
    console.log('='.repeat(60));
    console.log('📁 Available Reports:');
    console.log('   • HTML Report: reports/cucumber-html-report/index.html');
    console.log('   • API Report: reports/cucumber-api-report.html');
    console.log('   • UI Report: reports/cucumber-ui-report.html');
    console.log('   • JSON Reports: reports/*.json');
    console.log('   • Playwright Report: reports/playwright-report/index.html');
  }

  async runAllTests() {
    console.log('🎯 BDD Automation Test Suite');
    console.log('='.repeat(60));
    console.log('📋 Test Coverage:');
    console.log('   • API Tests: OpenLibrary Author API');
    console.log('   • UI Tests: NSW Motor Vehicle Stamp Duty Calculator');
    console.log('   • Reporting: Comprehensive HTML & JSON reports');
    
    const startTime = Date.now();
    let apiSuccess = false;
    let uiSuccess = false;

    try {
      // Run API tests
      apiSuccess = await this.runApiTests();
      
      // Run UI tests
      uiSuccess = await this.runUiTests();
      
      // Generate comprehensive reports
      this.generateReports();
      
      const totalDuration = ((Date.now() - startTime) / 1000).toFixed(2);
      
      console.log('\n🏁 Test Execution Summary:');
      console.log('='.repeat(60));
      console.log(`⏱️  Total Duration: ${totalDuration}s`);
      console.log(`🌐 API Tests: ${apiSuccess ? '✅ PASSED' : '❌ FAILED'}`);
      console.log(`🖥️  UI Tests: ${uiSuccess ? '✅ PASSED' : '❌ FAILED'}`);
      console.log(`📊 Reports Generated: ✅ READY`);
      
      if (apiSuccess && uiSuccess) {
        console.log('\n🎉 All tests completed successfully!');
        process.exit(0);
      } else {
        console.log('\n⚠️  Some tests failed. Check reports for details.');
        process.exit(1);
      }
      
    } catch (error) {
      console.error('\n💥 Test execution failed:', error.message);
      process.exit(1);
    }
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  const runner = new TestRunner();
  runner.runAllTests();
}

module.exports = TestRunner;
