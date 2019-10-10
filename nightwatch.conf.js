require('dotenv').config();
const argv = require('yargs').argv;

module.exports = {
  "src_folders" : ["tests"],
  'page_objects_path': ['page-objects'],

  "selenium": {
    "start_process": true,
    "server_path": "drivers\\abc.jar",
    // "server_path": require("selenium-server").path,
    //"server_path":argv.jar,
    "port": 4444,
    // check_process_delay: 5000,
    "cli_args": {
    "webdriver.chrome.driver": "drivers\\chromedriver.exe",
    // "webdriver.chrome.driver": require('chromedriver').path,
    // "webdriver.chrome.driver": argv.driver,
     "webdriver.gecko.driver" : "drivers\\geckodriver.exe"
    }
  },
  
  // "webdriver" : {
  //   "start_process": true,
  //    //"server_path": "./node_modules/.bin/chromedriver.exe",//for chrome
  //    //'server_path': require('chromedriver').path,
  //   "server_path": "./drivers/chromedriver.exe",
  //   //"server_path": "drivers/geckodriver.exe",
  //   // 'server_path': require('geckodriver').path,
  //   "port": 9515,
  //   // check_process_delay: 5000,
  //   // cli_args: [
  //   //   '--port=9515'
  //   // ]
  // },

  "globals_path": 'globals.js',
  
  "live_output": true,
  "detailed_output": true,

  "test_workers": {
    "enabled": true,
    "workers": 3,
  },
  
  
  "test_settings" : {
    "default" : {
      "request_timeout_options": {
          "timeout": 300000,
          "retry_attempts": 5
        },

      "launchUrl":argv.url,

      "silent" : true,
      "screenshots" : {
          'enabled': true,
          'on_failure': true,
          'on_error': true,
          'path': 'tests_output/screenshots'
      }
    },
    
    firefox: {
      //env: ['dev'],
      "desiredCapabilities": {
            "browserName": "firefox",
            "moz:firefoxOptions": {
           // "args": ["--headless", "--window-size=1860,1200"]
    },
        }
    },
    chrome : {
       "desiredCapabilities": {
        "browserName": "chrome",
        "acceptSslCerts": true,
        "acceptInsecureCerts": true,
        "disable-popup-blocking": true,
        "skip_testcases_on_fail": false,
        "loggingPrefs": {
        "browser": "ALL"
         },
        "acceptSslCerts": true,
        'chromeOptions': {
          w3c: false,
          "args": [
            "disable-web-security",
            "ignore-certificate-errors",
            "--test-type",
            "--disable-gpu",
            "--window-size=1860,1200",
           "--headless",
            // "--screenshot",
            // "--dump-dom"
          ],  
      },
     }
    }
  }
}