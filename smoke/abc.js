module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('https://www.google.com')
        .waitForElementVisible('body')
        .end();
    }
  };