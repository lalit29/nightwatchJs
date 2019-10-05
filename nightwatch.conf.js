require('dotenv').config();

module.exports = {
  "src_folders" : ["tests"],
  'page_objects_path': ['page-objects'],

  // "selenium": {
  //   "start_process": true,
  //   "server_path": "C:\\Users\\436793\\Desktop\\javascript\\selenium-server-standalone-3.141.59 (2).jar",
  //   "port": 4444,
  //   "cli_args": {
  //    "webdriver.chrome.driver": "C:\\Users\\436793\\Desktop\\javascript\\POC\\nightwatch_browserstack\\node_modules\\.bin\\chromedriver.exe",
  //    // "webdriver.gecko.driver" : "C:\\Users\\436793\\Desktop\\javascript\\drivers\\geckodriver-v0.25.0-win64 (1)\\geckodriver.exe"
  //   }
  // },
  
  "webdriver" : {
    "start_process": true,
    "server_path": "chromedriver.exe",//for chrome
    "port": 9515,
  },

  "globals_path": 'globals.js',
  
  "live_output": true,
  "detailed_output": true,

  "test_workers": {
    "enabled": true,
    "workers": "auto"
  },
  
  
  "test_settings" : {
    "default" : {
     "launchUrl":'https://stackoverflow.com/',
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': true,
        'path': 'tests_output/screenshots'
    },

  //   "beta" : {
  //     "globals" : {
  //         "launchUrl" : "https://www.hometown.in/login?redirect=%2Fprofile"
  //     }
  // },
  // "stage" : {
  //     "globals" : {
  //         "launchUrl" : "one_other_site",
  //         "other_var" : "this env needs a different variable"
  //     }
  // },

    "request_timeout_options": {
      "timeout": 300000,
      "retry_attempts": 5
    },

    
      "desiredCapabilities": {

        // "browserName": "firefox",
        // "moz:firefoxOptions": {
        //   "args": ["--headless"]
        // },

        "browserName": "chrome",
        //  "browserName" : "firefox",
        "acceptSslCerts": true,
        "acceptInsecureCerts": true,
        'chromeOptions': {
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

      "disable-popup-blocking": true,
      "skip_testcases_on_fail": false,
      "loggingPrefs": {
        "browser": "ALL"
      },
        acceptSslCerts: true
        

      }
    }
  }
}