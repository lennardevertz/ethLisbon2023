const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development", // "production" | "development" | "none"
    entry: {
        "chromium/contentScript": "./src/chromium/contentScript/index.js",
        "chromium/serviceWorker": "./src/chromium/serviceWorker.js",
        "chromium/standalone": "./src/common/standalone.js"
    },
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, "buildResults"),
        filename: "[name].js",
        publicPath: "chrome-extension://gjkikholgenelfadphkdbimailkhkonb/"
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "./src/chromium/manifest.json", to: "chromium"},
                {from: "./src/common/standalone.html", to: "chromium"},
                {from: "./src/common/standalone.css", to: "chromium"},
                {from: "./src/common/img", to: "chromium/img"},
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]

            },
            {
                test: /\.mpts$/,
                use: [
                    "mpts-loader"
                ]

            }
        ]
    } ,
    optimization: {
        splitChunks: {
            chunks: ()=>false,
        },
    },
}