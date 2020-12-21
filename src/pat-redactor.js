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

parser.add_argument("toolbar-external-container", null);


export default Base.extend({
    name: "redactor",
    trigger: ".pat-redactor",
    plugins: {},
    toolbar_observer: null,
    orig_container: null,

    async init() {
        let redactor = await import("redactor/redactor");
        redactor = redactor.default;

        this.orig_container = this.el.parentNode;

        const poptions = parser.parse(this.el, this.options);
        const options = {};

        if (poptions.plugins.includes("alignment")) {
            await import("redactor/_plugins/alignment/alignment");
        }
        if (poptions.plugins.includes("clips")) {
            await import("redactor/_plugins/clips/clips");
        }
        if (poptions.plugins.includes("counter")) {
            await import("redactor/_plugins/counter/counter");
        }
        if (poptions.plugins.includes("definedlinks")) {
            await import("redactor/_plugins/definedlinks/definedlinks");
        }
        if (poptions.plugins.includes("filemanager")) {
            await import("redactor/_plugins/filemanager/filemanager");
        }
        if (poptions.plugins.includes("fullscreen")) {
            await import("redactor/_plugins/fullscreen/fullscreen");
        }
        if (poptions.plugins.includes("imagemanager")) {
            await import("redactor/_plugins/imagemanager/imagemanager");
        }
        if (poptions.plugins.includes("inlinestyle")) {
            await import("redactor/_plugins/inlinestyle/inlinestyle");
        }
        if (poptions.plugins.includes("limiter")) {
            await import("redactor/_plugins/limiter/limiter");
        }
        if (poptions.plugins.includes("properties")) {
            await import("redactor/_plugins/properties/properties");
        }
        if (poptions.plugins.includes("specialchars")) {
            await import("redactor/_plugins/specialchars/specialchars");
        }
        if (poptions.plugins.includes("table")) {
            await import("redactor/_plugins/table/table");
        }
        if (poptions.plugins.includes("textdirection")) {
            await import("redactor/_plugins/textdirection/textdirection");
        }
        if (poptions.plugins.includes("textexpander")) {
            await import("redactor/_plugins/textexpander/textexpander");
        }
        if (poptions.plugins.includes("video")) {
            await import("redactor/_plugins/video/video");
        }
        if (poptions.plugins.includes("widget")) {
            await import("redactor/_plugins/widget/widget");
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
                $(this.el).trigger("input-change");
            },
        };

        const instance = redactor(this.el, options);

        // Refs:
        // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/MutationObserver
        // https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord
        // https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe

        debugger;
        // TODO: temporary set this to the metadata-toolbar for debugging.
        poptions.toolbar["external-container"] = "#metadata-toolbar";
        if (poptions.toolbar.external && poptions.toolbar["external-container"]) {
            this.toolbar_observer = new MutationObserver((mutation_list) => {
                // TODO: check which ``MutationRecord`` objects are coming in.
                // None of the time of writing.
                console.log(mutation_list);
                this.toolbar_observer.disconnect();
                // Move textarea out of redactor-box element and put it where it was originally.
                this.orig_container.appendChild(this.el);
                this.orig_container.removeChild(document.querySelector(".redactor-box"));
                this.init();
            });
            // TODO: listen on parent of external-container, es #metadata-toolbar itself is replaced.
            // MutationObserver seems not to get notice of that?
            this.toolbar_observer.observe(document.querySelector(poptions.toolbar["external-container"]).parentNode, {childList: true});
        }
    },
});
