import "regenerator-runtime/runtime"; // needed for ``await`` support
import $ from "jquery";
import _ from "underscore";
import Base from "patternslib/src/core/base";
import Parser from "patternslib/src/core/parser";

const parser = new Parser("redactor");

parser.add_argument("toolbar-type", "standard", ["standard", "fixed", "air"]);
parser.add_argument("toolbar-external", null);
parser.add_argument("toolbar-fixed-target", null);

parser.add_argument(
    "buttons",
    [
        "html",
        "undo",
        "redo",
        "format",
        "bold",
        "italic",
        "deleted",
        "lists",
        "link",
        "line",
        "image",
    ],
    [
        "bold",
        "deleted",
        "file",
        "format",
        "html",
        "image",
        "indent",
        "italic",
        "line",
        "link",
        "lists",
        "ol",
        "outdent",
        "redo",
        "sub",
        "sup",
        "ul",
        "underline",
        "undo",
    ],
    true
);

parser.add_argument(
    "formatting",
    ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5"],
    ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5"],
    true
);

parser.add_argument(
    "plugins",
    ["alignment", "fullscreen", "table", "imagemanager", "video"],
    [
        "alignment",
        "clips",
        "counter",
        "definedlinks",
        "filemanager",
        "fullscreen",
        "imagemanager",
        "inlinestyle",
        "limiter",
        "properties",
        "specialchars",
        "table",
        "textdirection",
        "textexpander",
        "video",
        "widget",
    ],
    true
);

//parser.add_argument("allowed-tags", [], [], true);
//parser.add_argument("denied-tags", [], [], true);
parser.add_argument("min-height", 0);
parser.add_argument("file-upload", undefined);
parser.add_argument("file-get-json", undefined);
parser.add_argument("imageupload", "dummy");
parser.add_argument("imagegetjson", "dummy");
parser.add_argument("imageresizable", false);
parser.add_argument("show-source-button", false);
parser.add_argument("limit-characters", false);

export default Base.extend({
    name: "redactor",
    trigger: ".pat-redactor",
    plugins: {},

    async init(el, opts) {
        let redactor = await import("redactor/src/redactor");
        redactor = redactor.default;

        const $el = $(el);
        el = el[0]; // get the DOM element.

        const poptions = parser.parse($el, opts);
        const options = {};

        if (poptions.plugins.includes("alignment")) {
            await import("redactor/src/plugins/alignment/alignment");
        }
        if (poptions.plugins.includes("clips")) {
            await import("redactor/src/plugins/clips/clips");
        }
        if (poptions.plugins.includes("counter")) {
            await import("redactor/src/plugins/counter/counter");
        }
        if (poptions.plugins.includes("definedlinks")) {
            await import("redactor/src/plugins/definedlinks/definedlinks");
        }
        if (poptions.plugins.includes("filemanager")) {
            await import("redactor/src/plugins/filemanager/filemanager");
        }
        if (poptions.plugins.includes("fullscreen")) {
            await import("redactor/src/plugins/fullscreen/fullscreen");
        }
        if (poptions.plugins.includes("imagemanager")) {
            await import("redactor/src/plugins/imagemanager/imagemanager");
        }
        if (poptions.plugins.includes("inlinestyle")) {
            await import("redactor/src/plugins/inlinestyle/inlinestyle");
        }
        if (poptions.plugins.includes("limiter")) {
            await import("redactor/src/plugins/limiter/limiter");
        }
        if (poptions.plugins.includes("properties")) {
            await import("redactor/src/plugins/properties/properties");
        }
        if (poptions.plugins.includes("specialchars")) {
            await import("redactor/src/plugins/specialchars/specialchars");
        }
        if (poptions.plugins.includes("table")) {
            await import("redactor/src/plugins/table/table");
        }
        if (poptions.plugins.includes("textdirection")) {
            await import("redactor/src/plugins/textdirection/textdirection");
        }
        if (poptions.plugins.includes("textexpander")) {
            await import("redactor/src/plugins/textexpander/textexpander");
        }
        if (poptions.plugins.includes("video")) {
            await import("redactor/src/plugins/video/video");
        }
        if (poptions.plugins.includes("widget")) {
            await import("redactor/src/plugins/widget/widget");
        }

        // Plugins not yet included
        // They need more config or external services
        // beyondgrammar
        // fontcolor
        // fontfamily
        // fontsize
        // handle
        // variable

        switch (poptions.toolbar.type) {
            case "air":
                options.air = true;
                break;
            case "fixed":
                options.toolbarFixed = true;
                if (poptions.toolbar["fixed-target"]) {
                    options.toolbarFixedTarget =
                        poptions.toolbar["fixed-target"];
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
        options.source = poptions.showSourceButton;

        _.extend(
            options,
            _.pick(poptions, [
                "minHeight",
                "formatting",
                //"deniedTags",
                //"allowedTags",
            ])
        );

        options.limiter = poptions.limitCharacters;

        // XXX Deprecated (see above where parser's arguments are added)
        if (poptions.imageupload) {
            options.imageUpload = poptions.imageupload;
        }
        if (poptions.imagegetjson) {
            options.imageManagerJson = poptions.imagegetjson;
        }
        options.imageResizable = poptions.imageresizable;

        // trigger classic input change on redactors change.
        options.callbacks = {
            changed: function (html) {
                $el.trigger("input-change");
            },
        };
        redactor(el, options);
    },
});
