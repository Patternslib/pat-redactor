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
    var parser = new Parser('redactor');

    parser.add_argument('toolbar-type', 'standard', ['standard', 'fixed', 'air']);
    parser.add_argument('buttons',
        ['html', 'formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'image', 'video', 'link', 'horizontal-rule', 'table'],
        ['formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'image', 'video', 'link', 'horizontal-rule'], true);
    parser.add_argument('allowed-tags', [], [], true);
    parser.add_argument('denied-tags', [], [], true);

    var redactor = {
        name: 'redactor',
        trigger: '.pat-redactor',

        init: function($el, opts) {
            var poptions = parser.parse($el, opts),
                options = {};

            switch (poptions.toolbarType) {
                case 'air':
                    options.air = true;
                    break;
                case 'fixed':
                    options.toolbarFixed = true;
                    break;
                default:
                    break;
            }

            options.buttons = poptions.buttons;

            if (poptions.allowedTags.length>0) {
                options.allowedTags = poptions.allowedTags;
            } else if (poptions.denedTags.length>0) {
                options.deniedTags = poptions.deniedTags;
            }

            // // Upload paths
            // if (data.redactorFileUpload) {
            //     options.fileUpload = data.redactorFileUpload;
            // }
            // if (data.redactorImageUpload) {
            //     options.imageUpload = data.redactorImageUpload;
            // }

            $el.redactor(options);
        }
    };

    registry.register(redactor);
    return redactor;
}));


