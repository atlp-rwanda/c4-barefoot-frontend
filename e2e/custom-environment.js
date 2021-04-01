
var NodeEnvironemnt = require('jest-environment-node')
var puppeteer = require('puppeteer')
let port= 3000;
class CustomEnvironment extends NodeEnvironemnt {
    constructor(config, context){
        super(config, context)
    }
    async setup(){
        await super.setup()
        this.global.browser = await puppeteer.launch({
            headless: false,
            slowMo: 100
        })
        this.global.page = await this.global.browser.newPage()
        await this.global.page.goto('http://localhost:'+port+'/', {waitUntil: 'load'})
    }
    async teardown(){
        await this.global.browser.close()
        await super.teardown()
    }
}
module.exports = CustomEnvironment