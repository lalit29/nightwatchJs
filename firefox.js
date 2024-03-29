require('dotenv').config();


module.exports = {
  "src_folders" : ["tests"],
  'page_objects_path': ['page-objects'],

  "selenium": {
    "start_process": true,
    "server_path": "drivers\\abc.jar",
    "port": 4444,
    // check_process_delay: 5000,
    "cli_args": {
    //  "webdriver.chrome.driver": "drivers\\chromedriver.exe",
     "webdriver.gecko.driver" : "drivers\\geckodriver.exe"
    }
  },
  
  // "webdriver" : {
  //   "start_process": true,
  //   // "server_path": "./node_modules/.bin/chromedriver",//for chrome
  //   "server_path": "./drivers/chromedriver.exe",
  //   // "server_path": "drivers/geckodriver.exe",
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
    "workers": "auto"
  },
  
  
  "test_settings" : {
    "default" : {
      "request_timeout_options": {
        "timeout": 300000,
        "retry_attempts": 5
      },
     "launchUrl":'https://stackoverflow.com/',
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': true,
        'path': 'tests_output/screenshots'
    },

  

    

    
      "desiredCapabilities": {

        "browserName": "firefox",
        "moz:firefoxOptions": {
          //"args": ["--headless","--window-size=1860,1200"]
        },

      //   "browserName": "chrome",
      //   //  "browserName" : "firefox",
      //   "acceptSslCerts": true,
      //   "acceptInsecureCerts": true,
      //   'chromeOptions': {
      //     w3c: false,
      //     "args": [
      //       "disable-web-security",
      //       "ignore-certificate-errors",
      //       "--test-type",
      //       "--disable-gpu",
      //       "--window-size=1860,1200",
      //       "--headless",
      //       // "--screenshot",
      //       // "--dump-dom"
      //     ],  
      // },

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