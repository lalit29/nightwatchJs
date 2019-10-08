require('dotenv').config();

module.exports = {
    'src_folders': ['tests'],
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
    "test_workers": {
      "enabled": true,
      "workers": 3,
    },
    test_settings: {
        "default" : {
            "request_timeout_options": {
                "timeout": 300000,
                "retry_attempts": 5
              },
            "launchUrl":'https://stackoverflow.com/',
            "silent" : true,
            "screenshots" : {
                'enabled': true,
                'on_failure': true,
                'on_error': true,
                'path': 'tests_output/screenshots'
            }
          },
      
        chrome: { 
            env: ['prod'],
            desiredCapabilities: {
                "browserName" : "chrome",
                "acceptSslCerts": true,
                "acceptInsecureCerts": true,
                "chromeOptions" : {
                  w3c: false,
                  "args" : [
                    "use-fake-device-for-media-stream", 
                    "use-fake-ui-for-media-stream",
                    "disable-web-security",
                    "ignore-certificate-errors",
                    "--test-type",
                    "--disable-gpu",
                    "--window-size=1860,1200",
                    "--headless",
                   // "--screenshot",
                   // "--dump-dom"
                  ],
                  "disable-popup-blocking": true,
                  "skip_testcases_on_fail": false,
                  "loggingPrefs": {
                 "browser": "ALL"
                  },
                  acceptSslCerts: true
                }
            }
        },
    
        edge: {
            env: ['prod', 'dev'],
            desiredCapabilities: {
                browserName: "MicrosoftEdge",
                platform: "Windows 10"
            }
        },
    
        firefox: {
            env: ['dev'],
            desiredCapabilities: {
                "browserName": "firefox",
        // "moz:firefoxOptions": {
        //   "args": ["--headless"]
        // },
            }
        },
}};