var webdriver = require('selenium-webdriver');
var fs = require('fs');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

describe('basic test', function () {
	it('should be on correct page', function (done) {
		driver.get('http://localhost:9001/');
		driver.getTitle().then(function(title) {
			expect(title).toBe('Test Title');
		});
	    driver.switchTo().defaultContent();
	    driver.executeScript("return window.__coverage__;").then(function (obj) {
			fs.writeFile('coverage/coverage.json', JSON.stringify(obj));
			driver.quit();
			done();
		});
	});
});