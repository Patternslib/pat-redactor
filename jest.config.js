const defaults = require("@patternslib/dev/jest.config.js");

// propertitary redactor library needs to be a level up from pat-redactor repo.
defaults.moduleNameMapper["^redactor/(.*)$"] = "../../redactor/$1";

module.exports = defaults;
