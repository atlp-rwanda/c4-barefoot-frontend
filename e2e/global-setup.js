const { setup: setupDevServer } = require("jest-dev-server")
module.exports = async () => {
    await setupDevServer({
        command: 'npm run start',
        launchTimeout: 30000,
        debug: true,
        port: 3000
    })
}