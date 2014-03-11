/**
 * Basic pattern for packery
 * Copyright 2013-2014 Simplon B.V. - Wichert Akkerman
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'pat-registry', 'pat-parser'], function ($, registry, Parser) {
            return factory($, registry, Parser);
        });
    } else {
        factory(root.jQuery, root.patterns, root.patterns.Parser);
    }
}(this, function($, registry, Parser) {
    var parser = new Parser("packery");

    var redactor = {
        name: "redactor",
        trigger: ".pat-redactor",

        init: function($el) {
            var options = {},
                data = $el.data();

            // Toolbar buttons
            if (data.redactorButtons) {
                options.buttons = data.redactorButtons.split(/[ ,]+/);
            }

            // Upload paths
            if (data.redactorFileUpload) {
                options.fileUpload = data.redactorFileUpload;
            }
            if (data.redactorImageUpload) {
                options.imageUpload = data.redactorImageUpload;
            }


            $el.redactor(options);
        }
    };

    registry.register(redactor);
    return redactor;
}));


