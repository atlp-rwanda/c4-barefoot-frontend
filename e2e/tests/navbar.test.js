import routes from './testData';

let page= global.page;

describe('Navbar', () =>{
    test('it should render a navbar on landing page',async () =>{
        await page.goto(routes.public.home);
        // await page.goto('http://localhost/', {waitUntil: 'load'})
        await page.waitForSelector('.container');
        await page.waitForSelector('.navbar');
        await page.waitForSelector('.home');
    }, 160000);

});
