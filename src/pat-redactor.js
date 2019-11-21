/*
 * Pattern for Redactor 3
 * Copyright 2015-2016 Syslab.com Gmbh
 */
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([
      "jquery",
      "underscore",
      "pat-base",
      "pat-parser",
      "redactor",
      "redactor-alignment",
      //"redactor-clips",
      "redactor-counter",
      "redactor-definedlinks",
      "redactor-filemanager",
      "redactor-fullscreen",
      "redactor-imagemanager",
      "redactor-inlinestyle",
      "redactor-limiter",
      "redactor-properties",
      "redactor-table",
      //"redactor-textdirection",
      //"redactor-textexpander",
      "redactor-video"
    ], function($, _, Base, Parser) {
      return factory.apply(this, arguments);
    });
  } else {
    factory(
      root.jQuery,
      _,
      root.patterns,
      root.patterns.Base,
      root.patterns.Parser
    );
  }
})(this, function($, _, Base, Parser) {
  var parser = new Parser("redactor");

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
      "image"
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
      "undo"
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
    ["alignment", "table", "fullscreen", "video", "imagemanager"],
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
      "table",
      "textdirection",
      "textexpander",
      "video"
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

  return Base.extend({
    name: "redactor",
    trigger: ".pat-redactor",
    plugins: {},

    init: function(el, opts) {
      var $el = $(el);
      el = el[0]; // get the DOM element.

      var i,
        poptions = parser.parse($el, opts),
        options = {};

      switch (poptions.toolbar.type) {
        case "air":
          options.air = true;
          break;
        case "fixed":
          options.toolbarFixed = true;
          if (poptions.toolbar["fixed-target"]) {
            options.toolbarFixedTarget = poptions.toolbar["fixed-target"];
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

      //options.limiter = poptions.limitCharacters;

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
        changed: function(html) {
          $el.trigger("input-change");
        }
      };

      $el.redactor(options);
    }
  });
});
