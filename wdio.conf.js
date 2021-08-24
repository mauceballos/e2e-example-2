exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**.*'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                '--incognito',
                '--disable-infobars',
                "--window-size=1920,1080",
                '--disable-notifications',
                "--disable-web-security",
                "--no-sandbox",
                "--whitelisted-ips"
            ]
        }
    }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
