module.exports = {
    "src_folders" : ["tests"],
  
  
    "webdriver" : {
      "start_process": true,
      "server_path": "node_modules/.bin/chromedriver",
      // "cli_args": {
      //   "webdriver.chrome.driver": "node_modules/.bin/chromedriver"
      // },
      "port": 9515
    },
  
    "globals_path": 'globals.js',
    
    "live_output": true,
    "detailed_output": true,
  
    "test_workers": {
      "enabled": true,
      "workers": "auto"
    },
    // reporter : function(results, cb) {
    //   console.log('results', results);
    //   cb();
    // },
    
    "test_settings" : {
      "default" : {
       "launchUrl":'https://stage.hometown.in/',
        'screenshots': {
          'enabled': true,
          'on_failure': true,
          'on_error': true,
          'path': 'tests_output/screenshots'
      },
  
      
  
      "request_timeout_options": {
        "timeout": 300000,
        "retry_attempts": 5
      },
        "desiredCapabilities": {
          "browserName": "chrome",
          "acceptSslCerts": true,
          "acceptInsecureCerts": true,
          'chromeOptions': {
            "args": [
              "disable-web-security",
              "ignore-certificate-errors",
              "--test-type",
              "--disable-gpu",
              "--window-size=1860,1200",
              // "--headless",
              // "--screenshot",
              // "--dump-dom"
            ],
           // 'binary': 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
          // 'args': ['--window-size=1400,1000','--headless','disable-gpu'],
          //  "binary" : "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
            //"webdriver.chrome.driver": "node_modules/.bin/chromedriver.exe"
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