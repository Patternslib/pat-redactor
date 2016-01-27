require.config({
    baseUrl: "src",
    paths: {
        "dropzone":                     "bower_components/dropzone/downloads/dropzone",
        "i18n":                         "bower_components/patternslib/src/core/i18n",
        "jquery":                       "bower_components/jquery/dist/jquery",
        "jquery.browser":               "bower_components/jquery.browser/dist/jquery.browser",
        "jquery-hotkeys":               "bower_components/raptor-dependencies/jquery-hotkeys",
        "jquery.form":                  "bower_components/jquery-form/jquery.form",
        "jqueryui":                     "bower_components/raptor-dependencies/jquery-ui",
        "logging":                      "bower_components/logging/src/logging",
        "pat-ajax":                     "bower_components/patternslib/src/pat/ajax/ajax",
        "pat-base":                     "bower_components/patternslib/src/core/base",
        "pat-compat":                   "bower_components/patternslib/src/core/compat",
        "pat-checklist":                "bower_components/patternslib/src/pat/checklist/checklist",
        "pat-htmlparser":               "bower_components/patternslib/src/lib/htmlparser",
        "pat-inject":                   "bower_components/patternslib/src/pat/inject/inject",
        "pat-jquery-ext":               "bower_components/patternslib/src/core/jquery-ext",
        "pat-logger":                   "bower_components/patternslib/src/core/logger",
        "pat-modal":                    "bower_components/patternslib/src/pat/modal/modal",
        "pat-mockup-parser":            "bower_components/patternslib/src/core/mockup-parser",
        "pat-parser":                   "bower_components/patternslib/src/core/parser",
        "pat-pluggable":                "bower_components/patternslib/src/core/pluggable",
        "pat-registry":                 "bower_components/patternslib/src/core/registry",
        "pat-upload":                   "bower_components/pat-upload/src/pat-upload",
        "pat-utils":                    "bower_components/patternslib/src/core/utils",
        "pat-tooltip":                  "bower_components/patternslib/src/pat/tooltip/tooltip",
        "pat-remove":                   "bower_components/patternslib/src/core/remove",
        "preview":                      "bower_components/pat-upload/src/templates/preview.xml",
        "redactor":                     "../redactor/redactor",
        "redactor-alignment":           "../redactor/plugins/alignment/alignment",
        "redactor-clips":               "../redactor/plugins/clips/clips",
        "redactor-codemirror":          "../redactor/plugins/codemirror",
        "redactor-counter":             "../redactor/plugins/definedlinks",
        "redactor-definedlinks":        "../redactor/plugins/codemirror",
        "redactor-filemanager":         "../redactor/plugins/filemanager",
        "redactor-fullscreen":          "../redactor/plugins/fullscreen",
        "redactor-imagemanager":        "../redactor/plugins/imagemanager",
        "redactor-inlinestyle":         "../redactor/plugins/inlinestyle",
        "redactor-limiter":             "../redactor/plugins/limiter",
        "redactor-properties":          "../redactor/plugins/properties",
        "redactor-source":              "../redactor/plugins/source",
        "redactor-table":               "../redactor/plugins/table",
        "redactor-textdirection":       "../redactor/plugins/textdirection",
        "redactor-textexpander":        "../redactor/plugins/codemirror",
        "redactor-video":               "../redactor/plugins/video",
        "text":                         "bower_components/requirejs-text/text",
        "underscore":                   "bower_components/underscore/underscore",
        "upload":                       "bower_components/pat-upload/src/templates/upload.xml",
    },
    "shim": {
        "logging": { "exports": "logging" },
        "jqueryui": { "deps": ["jquery"] },
        "jquery-hotkeys": { "deps": ["jquery"] }
    }
});

require(["jquery", "pat-registry", "pat-redactor"], function($, registry) {
    $(document).ready(function() {
      registry.init();
    });
});
