// require('dotenv').config();
// const argv = require('yargs').argv;

// module.exports = {
//   "src_folders" : ["tests"],// test
//   'page_objects_path': ['page-objects'],//

  
//   "selenium": {
//     "start_process": true,
//     "server_path": "drivers\\abc.jar",
//     // "server_path": require("selenium-server").path,
//     //"server_path":argv.jar,
//     "port": 4444,
// //   "selenium": {
// //     "start_process": true,
// //     // "server_path": "drivers\\abc.jar",//
// //     "server_path": require("selenium-server").path,
// //     //"server_path":argv.jar,
// //     "port": 4444,
// //     // check_process_delay: 5000,
// //     "cli_args": {
// //     //  "webdriver.chrome.driver": "drivers\\chromedriver.exe",
// //       "webdriver.chrome.driver": require('chromedriver').path,
// //     // "webdriver.chrome.driver": argv.driver,
// //     // "webdriver.gecko.driver" : "drivers\\geckodriver.exe"
// //     }
// //   },
  
//   // "webdriver" : {
//   //   "start_process": true,
//   //   // "server_path": "./node_modules/.bin/chromedriver.exe",//for chrome
//   //   // 'server_path': require('chromedriver').path,
//   //   //"server_path": "./drivers/chromedriver.exe",
//   //   // "server_path": "drivers/geckodriver.exe",
//   //   // 'server_path': require('geckodriver').path,
//   //   "port": 9515,

//   //   // check_process_delay: 5000,
//   //   "cli_args": {
//   //   "webdriver.chrome.driver": "drivers\\chromedriver.exe",
//   //   // "webdriver.chrome.driver": require('chromedriver').path,
//   //   // "webdriver.chrome.driver": argv.driver,
//   //    "webdriver.gecko.driver" : "drivers\\geckodriver.exe"
//   //   }
//   // },
  
//   // "webdriver" : {
//   //   "start_process": true,
//   //    //"server_path": "./node_modules/.bin/chromedriver.exe",//for chrome
//   //    //'server_path': require('chromedriver').path,
//   //   "server_path": "./drivers/chromedriver.exe",
//   //   //"server_path": "drivers/geckodriver.exe",
//   //   // 'server_path': require('geckodriver').path,
//   //   "port": 9515,
//   //   // check_process_delay: 5000,
//   //   // cli_args: [
//   //   //   '--port=9515'
//   //   // ]
//   // },

//   "globals_path": 'globals.js',
  
//   "live_output": true,
//   "detailed_output": true,

//   "test_workers": {
//     "enabled": true,
//     "workers": 3,
//   },
  
  
//   "test_settings" : {
//     "default" : {
//       "request_timeout_options": {
//           "timeout": 300000,
//           "retry_attempts": 5
//         },

//       "launchUrl":argv.url,

//       "silent" : true,
//       "screenshots" : {
//           'enabled': true,
//           'on_failure': true,
//           'on_error': true,
//           'path': 'tests_output/screenshots'
//       }
//     },
    
//     firefox: {
//       //env: ['dev'],
//       "desiredCapabilities": {
//             "browserName": "firefox",
//             "moz:firefoxOptions": {
//            // "args": ["--headless", "--window-size=1860,1200"]
//     },
//         }
//     },
//     chrome : {
//        "desiredCapabilities": {
//         "browserName": "chrome",
//         "acceptSslCerts": true,
//         "acceptInsecureCerts": true,
//         "disable-popup-blocking": true,
//         "skip_testcases_on_fail": false,
//         "loggingPrefs": {
//         "browser": "ALL"
//          },
//         "acceptSslCerts": true,
//         'chromeOptions': {
//           w3c: false,
//           "args": [
//             "disable-web-security",
//             "ignore-certificate-errors",
//             "--test-type",
//             "--disable-gpu",
//             "--window-size=1860,1200",
//            "--headless",
//             // "--screenshot",
//             // "--dump-dom"
//           ],  
//       },
//      }
//     }
//   }
// }}



require('dotenv').config();


//useful links below
//https://github.com/jls/nightwatch-html-reporter/issues/21
//https://www.google.com/search?q=separate+browser+report+nightwatchjs&rlz=1C1GCEU_enIN821IN821&oq=separate+browser+report+nightwatchjs&aqs=chrome..69i57j33.16682j1j7&sourceid=chrome&ie=UTF-8
//https://github.com/dwyl/learn-nightwatch

module.exports = {
  "src_folders" : ["tests"],
  'page_objects_path': ['page-objects'],

  "selenium": {
    "start_process": true,
    "server_path": "drivers\\abc.jar",
    "port": 4444,
    // check_process_delay: 5000,
    "cli_args": {
     "webdriver.chrome.driver": "drivers\\chromedriver.exe",
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

      //"launchUrl":argv.url,
      "launchUrl":'https://stackoverflow.com/',

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


//nightwatch --env chrome --jar="drivers\\abc.jar" --driver="drivers\\chromedriver.exe"