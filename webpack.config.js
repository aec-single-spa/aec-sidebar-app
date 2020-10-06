const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "aec",
        projectName: "sidebar-app",
        webpackConfigEnv,
    });

    return webpackMerge.smart(defaultConfig, {
        output: {
            filename: "app.js",
        },
        // modify the webpack config however you'd like to by adding to this object
    });
};
