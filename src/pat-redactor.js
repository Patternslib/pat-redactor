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
    parser.add_argument('toolbar-external', null);
    parser.add_argument('toolbar-fixed-target', null);

    parser.add_argument('buttons',
        ['html', 'formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'image', 'video', 'link', 'horizontal-rule', 'table'],
        ['formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'image', 'video', 'link', 'horizontal-rule'], true);

    parser.add_argument('air-buttons', [],
        ['formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'image', 'video', 'link', 'horizontal-rule'], true);

    parser.add_argument('allowed-tags', [], [], true);
    parser.add_argument('denied-tags', [], [], true);
    parser.add_argument('fileupload', null);
    parser.add_argument('imageupload', null);
    parser.add_argument('imagegetjson', null);

    var redactor = {
        name: 'redactor',
        trigger: '.pat-redactor',

        init: function($el, opts) {
            var i,
                poptions = parser.parse($el, opts),
                options = {};

            switch (poptions.toolbar.type) {
                case 'air':
                    options.air = true;
                    if (poptions.airButtons.length !==0) {
                        options.airButtons = poptions.airButtons;
                    }
                    break;
                case 'fixed':
                    options.toolbarFixed = true;
                    if (poptions.toolbar['fixed-target']) {
                        options.toolbarFixedTarget = poptions.toolbar['fixed-target'];
                    }
                    break;
                default:
                    break;
            }

            if (poptions.toolbar.external) {
                options.toolbarExternal = poptions.toolbar.external;
            }

            // Remove dashes from button names, per redactor convention
            for (i=0; i< poptions.buttons.length; i++) {
                poptions.buttons[i] = poptions.buttons[i].replace('-', '');
            }

            options.buttons = poptions.buttons;

            if (poptions.allowedTags.length>0) {
                options.allowedTags = poptions.allowedTags;
            } else if (poptions.deniedTags.length>0) {
                options.deniedTags = poptions.deniedTags;
            }

            if (poptions.fileUpload) {
                options.fileUpload = poptions.fileUpload;
            }

            if (poptions.imageupload) {
                options.imageUpload = poptions.imageupload;
            }
            if (poptions.imagegetjson) {
                options.imageGetJson = poptions.imagegetjson;
            }

            $el.redactor(options);
        }
    };

    registry.register(redactor);
    return redactor;
}));


