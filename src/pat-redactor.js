/**
 * Pattern for Redactor 2
 * Copyright 2013-2014 Simplon B.V. - Wichert Akkerman
 * Copyright 2015-2016 Syslab.com Gmbh
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([
            "jquery",
            "underscore",
            "pat-registry",
            "pat-base",
            "pat-parser",
            "pat-pluggable",
            "redactor",
            "redactor-alignment",
            // "redactor-clips",
            // "redactor-codemirror",
            "redactor-counter",
            "redactor-definedlinks",
            "redactor-filemanager",
            "redactor-fullscreen",
            "redactor-imagemanager",
            "redactor-inlinestyle",
            "redactor-limiter",
            "redactor-properties",
            "redactor-source",
            "redactor-table",
            // "redactor-textdirection",
            // "redactor-textexpander",
            "redactor-video"
            ], function ($, _, registry, Base, Parser, Redactor) {
                return factory.apply(this, arguments);
        });
    } else {
        factory(root.jQuery, _, root.patterns, root.patterns.Base, root.patterns.Parser);
    }
}(this, function($, _, registry, Base, Parser) {
    var parser = new Parser('redactor');

    parser.add_argument('toolbar-type', 'standard', ['standard', 'fixed', 'air']);
    parser.add_argument('toolbar-external', null);
    parser.add_argument('toolbar-fixed-target', null);
    parser.add_argument('buttons',
        ['format', 'bold', 'italic', 'deleted', 'lists', 'image', 'file', 'link', 'horizontalrule', 'alignment', 'video', 'html', 'table'],
        ['format', 'bold', 'italic', 'deleted', 'lists', 'image', 'file', 'link', 'horizontalrule', 'alignment', 'video', 'html', 'table'],
        true);
    parser.add_argument('formatting',
        ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5'],
        ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5'],
        true);
    parser.add_argument('plugins', 
        ['alignment', 'table', 'source', 'fullscreen', 'video', 'imagemanager'],
        ['inlinestyle', 'source', 'table', 'codemirror', 'alignment', 'fullscreen', 'video', 'imagemanager', 'filemanager', 'properties', 'definedlinks', 'clips', 'limiter', 'textexpander', 'textdirection', 'counter'], 
        true);
    parser.add_argument('allowed-tags', [], [], true);
    parser.add_argument('denied-tags', [], [], true);
    parser.add_argument('min-height', 0);
    parser.add_argument('file-upload', undefined);
    parser.add_argument('file-get-json', undefined);
    parser.add_argument('image-upload', undefined);
    parser.add_argument('image-resizable', true);
    parser.add_argument('image-get-json', undefined);
    parser.add_argument('show-source-button', false);
    parser.add_argument('limit-characters', false);

    // XXX: Deprecated
    parser.add_argument('fileupload', undefined);
    parser.add_argument('imageupload', undefined);
    parser.add_argument('imagegetjson', undefined);

    return Base.extend({
        name: 'redactor',
        trigger: '.pat-redactor',
        plugins: {},

        init: function($el, opts) {
            var i, poptions = parser.parse($el, opts), options = {};

            switch (poptions.toolbar.type) {
                case 'air':
                    options.air = true;
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
            options.plugins = poptions.plugins;
            options.buttons = poptions.buttons;
            options.imageResizable = poptions.image.resizable;
            options.buttonSource = poptions.showSourceButton;
            _.extend(options,
                _.pick(poptions, [
                    'minHeight',
                    'fileUpload',
                    'imageGetJson',
                    'deniedTags',
                    'allowedTags',
                    'formatting',
                ])
            );
            options.limiter = poptions.limitcharacters;
            options['formattingTags'] = options.formatting; // XXX: Some versions of redactor uses formattingTags instead of formatting.
            // XXX Deprecated (see above where parser's arguments are added)
            if (poptions.imageupload) {
                options.imageUpload = poptions.imageupload;
            }
            if (poptions.imagegetjson) {
                options.imageManagerJson = poptions.imagegetjson;
            }

            if (poptions.fileupload) {
                options.fileUpload = poptions.fileupload;
            }
            if (poptions.filegetjson) {
                options.fileManagerJson = poptions.filegetjson;
            }

            // if (typeof RedactorPlugins === 'undefined') window.RedactorPlugins = {};
            // RedactorPlugins = this.plugins;
            // options['plugins'] = _.keys(this.plugins);

            // Until here
            //$el.redactor(this.initializePlugins(options)[0]);
            $el.redactor(options);
        }
    });
}));
