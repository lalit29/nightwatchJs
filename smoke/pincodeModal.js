module.exports={
    '@disabled': true,
    'Pincode Modal test'(browser) {
        browser
        .useXpath()
        .url('https://www.hometown.in/furniture/living-room-furniture/sofas')
        .windowMaximize()
        .pause(1000)
        .click('//*[@id="content"]/div/main/section/div[1]/section/div[1]/div/div/div[3]/button[1]/span')
        .pause(1000)
        .window_handles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[1];
            browser.switchWindow(handle);
        });
        // .moveTo('/html/body/div[12]/div/div/div/div/input')
        // .setValue('/html/body/div[12]/div/div/div/div/input','800005')
        // .end();
    }
}