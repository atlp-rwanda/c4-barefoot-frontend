import routes from './testData';

let page= global.page;

describe('Landing page', () =>{
    test('it should render the home page',async () =>{
        // await page.goto(routes.public.home);
        //but the same path is the default
        await page.waitForSelector('.container');
        await page.waitForSelector('.navbar');
        await page.waitForSelector('.home');
    }, 160000);

});
