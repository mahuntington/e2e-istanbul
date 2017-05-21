var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var fs = require('fs');
jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

describe('Main page', function (){
    it('should have title of Test Title', function (done) {
        driver.get('http://localhost:9001/').then(function(){
            driver.wait(webdriver.until.titleIs('Test Title'), 10000);
            driver.getTitle().then(function(title) {
                expect(title).toBe('Test Title');
                done();
            });
        });
    });
    it('should show extra div when clicking on link', function (done) {
        driver.findElement(webdriver.By.id('clicker')).click();
        driver.findElement(webdriver.By.id('jQueryAddedDiv')).then(function(element){
            element.getText().then(function(div_text){
                expect(div_text).toBe('added through jquery');
                driver.switchTo().defaultContent();
                driver.executeScript("return window.__coverage__;").then(function (obj) {
                    fs.writeFile('coverage/coverage.json', JSON.stringify(obj));
                    driver.quit();
                    done();
                });
            });
        });
    });
});
