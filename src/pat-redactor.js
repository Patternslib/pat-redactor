/**
 * Pattern for Redactor
 * Copyright 2013-2014 Simplon B.V. - Wichert Akkerman
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            "jquery",
            "underscore",
            "pat-registry",
            "pat-utils",
            "pat-parser",
            "pat-pluggable",
            "redactor",
            ], function ($, _, registry, utils, Parser, pluggablePattern, Redactor) {
                return factory.apply(this, arguments);
        });
    } else {
        factory(root.jQuery, _, root.patterns, utils, root.patterns.Parser, pluggablePattern, Redactor);
    }
}(this, function($, _, registry, utils, Parser, pluggablePattern, Redactor) {
    var parser = new Parser('redactor');

    parser.add_argument('toolbar-type', 'standard', ['standard', 'fixed', 'air']);
    parser.add_argument('toolbar-external', null);
    parser.add_argument('toolbar-fixed-target', null);
    parser.add_argument('buttons',
        ['html', 'formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'outdent', 'indent', 'alignment', 'image', 'video', 'link', 'horizontal-rule', 'table'],
        ['html', 'formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'outdent', 'indent', 'alignment', 'image', 'video', 'link', 'horizontal-rule', 'table'],
        true);
    parser.add_argument('air-buttons', [],
        ['formatting', 'bold', 'italic', 'unordered-list', 'ordered-list', 'image', 'video', 'link', 'horizontal-rule'],
        true);
    parser.add_argument('formatting',
        ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5'],
        ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5'],
        true);
    parser.add_argument('allowed-tags', [], [], true);
    parser.add_argument('denied-tags', [], [], true);
    parser.add_argument('min-height', 0);
    parser.add_argument('file-upload', undefined);
    parser.add_argument('image-upload', undefined);
    parser.add_argument('image-get-json', undefined);
    parser.add_argument('buttonSource', false);

    // XXX: Deprecated
    parser.add_argument('fileupload', undefined);
    parser.add_argument('imageupload', undefined);
    parser.add_argument('imagegetjson', undefined);

    var redactor = pluggablePattern.extend({
        name: 'redactor',
        trigger: '.pat-redactor',
        plugins: {},

        init: function($el, opts) {
            var i, poptions = parser.parse($el, opts), options = {};
            if ($.browser.msie && parseInt($.browser.version, 10) === 8) {
                options.rangy = true;
            }

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

            _.extend(options,
                _.pick(poptions,
                    ['minHeight', 'fileUpload', 'imageGetJson', 'deniedTags', 'allowedTags', 'formatting', 'buttonSource']
                )
            );
            // XXX Deprecated (see above where parser's arguments are added)
            if (poptions.imageupload) {
                options.imageUpload = poptions.imageupload;
            }
            if (poptions.imagegetjson) {
                options.imageGetJson = poptions.imagegetjson;
            }
            // Until here
            $el.redactor(this.initializePlugins(options)[0]);
        }
    });
    registry.register(redactor);
    return redactor;
}));
