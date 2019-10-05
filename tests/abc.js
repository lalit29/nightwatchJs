module.exports = {
  '@tags': ['hello'],
  '@disabled': false,
  'modal Test'(browser) {
      browser
          .useXpath()
          .url('https://www.hometown.in/furniture/living-room-furniture/sofas')
          .windowMaximize()

          
          .click('//*[@id="content"]/div/main/section/div[1]/section/div[1]/div/div/div[3]/button[1]/span')
          .waitForElementVisible('/html/body/div[7]/div/div/div/div/input', 3000)

          browser.getWindowPosition(function(value) {
            console.log(value);
          });


         

        //  browser .setValue('//input[@placeholder="Enter Pincode / City"]','800005')
        //  browser.assert.containsText('//*[@id="content"]/div/main/section/div[1]/div/div/section[5]/div/div/div[1]/div[1]/a/div[2]/div[2]/span', "Delivered by 12th Oct")
         


          // .setValue('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[1]/input', 'lalit@hometown.in')
          // .pause(1000)
          // .setValue('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[2]/div/div/input','987654321')
          // .click('//*[@id="content"]/div/main/section/div/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/form/div[3]/div[2]/button')
          // .pause(1000)
          // .url('https://www.hometown.in/profile')
          // .pause(1000)
          // .waitForElementVisible('//*[@id="content"]/div/main/div[2]/div/section[2]/div/div[2]/div/div[1]/a')
          browser.end();
  }
};
