module.exports = {
    rootDir: "./src",
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^redactor/(.*)$": "<rootDir>/../../redactor/$1", // propertitary redactor library needs to be a level up from pat-redactor repo.
    },
    transformIgnorePatterns: ["/node_modules/(?!.*patternslib/*).+\\.[t|j]sx?$"],
};
