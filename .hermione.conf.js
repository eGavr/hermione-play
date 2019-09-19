module.exports = {
    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome' // this browser should be installed on your OS
            }
        }
    },
    system: {
        parallelLimit: 1
    }
};
