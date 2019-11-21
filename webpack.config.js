const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

var baseConfig = require("./node_modules/patternslib/webpack/base.config.js");

const config = merge(baseConfig, {
  mode: "development",

  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, "../"),
    openPage: "pat-redactor/index.html",  // ATTENTION: We assume this repo is checked out under the path "pat-redactor"
    port: "3001",
    host: "0.0.0.0"
  },

  entry: {
    bundle: path.resolve(__dirname, "bundle.config.js")
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname)
  },

  resolve: {
    modules: [
      path.resolve(__dirname, "node_modules/patternslib/src"),
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules")
    ],
    alias: {
      // ATTENTION: You need to provide the redactor library one level up.
      redactor:                 path.resolve(__dirname,  "../redactor/redactor.js"),
      "redactor-alignment":     path.resolve(__dirname, "../redactor/_plugins/alignment/alignment.js"),
      "redactor-clips":         path.resolve(__dirname, "../redactor/_plugins/clips/clips.js"),
      "redactor-counter":       path.resolve(__dirname, "../redactor/_plugins/counter/counter.js"),
      "redactor-definedlinks":  path.resolve(__dirname, "../redactor/_plugins/definedlinks/definedlinks.js"),
      "redactor-filemanager":   path.resolve(__dirname, "../redactor/_plugins/filemanager/filemanager.js"),
      "redactor-fullscreen":    path.resolve(__dirname, "../redactor/_plugins/fullscreen/fullscreen.js"),
      "redactor-imagemanager":  path.resolve(__dirname, "../redactor/_plugins/imagemanager/imagemanager.js"),
      "redactor-inlinestyle":   path.resolve(__dirname, "../redactor/_plugins/inlinestyle/inlinestyle.js"),
      "redactor-limiter":       path.resolve(__dirname, "../redactor/_plugins/limiter/limiter.js"),
      "redactor-properties":    path.resolve(__dirname, "../redactor/_plugins/properties/properties.js"),
      "redactor-table":         path.resolve(__dirname, "../redactor/_plugins/table/table.js"),
      "redactor-textdirection": path.resolve(__dirname, "../redactor/_plugins/textdirection/textdirection.js"),
      "redactor-textexpander":  path.resolve(__dirname, "../redactor/_plugins/textexpander/textexpander.js"),
      "redactor-video":         path.resolve(__dirname, "../redactor/_plugins/video/video.js"),

      // Fix paths from patternslib
      "jquery":                 path.resolve(__dirname,  "node_modules/jquery/dist/jquery.js"),
      "autobahn":               path.resolve(__dirname,  "node_modules/autobahn/lib/autobahn.js"),
      "push-kit":               path.resolve(__dirname,  "node_modules/core/push_kit.js"),
      "google-code-prettify":   path.resolve(__dirname,  "node_modules/google-code-prettify/src/prettify.js"),
      "intersection-observer":  path.resolve(__dirname,  "node_modules/intersection-observer/intersection-observer.js"),
      "jcrop":                  path.resolve(__dirname,  "node_modules/jquery-jcrop/js/jquery.Jcrop.min.js"),
      "jquery.anythingslider":  path.resolve(__dirname,  "node_modules/anythingslider/js/jquery.anythingslider.min.js"),
      "jquery.chosen":          path.resolve(__dirname,  "node_modules/chosen-js/chosen.jquery.js"),
      "jquery.placeholder":     path.resolve(__dirname,  "node_modules/jquery-placeholder/jquery.placeholder.js"),
      "jquery.textchange":      path.resolve(__dirname,  "node_modules/jquery-textchange/jquery.textchange.js"),
      "logging":                path.resolve(__dirname,  "node_modules/logging/src/logging.js"),
      "masonry":                path.resolve(__dirname,  "node_modules/masonry-layout/dist/masonry.pkgd.min.js"),
      "patternslib.slides":     path.resolve(__dirname,  "node_modules/slides/src/slides.js"),
      "photoswipe-ui":          path.resolve(__dirname,  "node_modules/photoswipe/dist/photoswipe-ui-default"),
      "prefixfree":             path.resolve(__dirname,  "node_modules/prefixfree/prefixfree.min.js"),
      "promise-polyfill":       path.resolve(__dirname,  "node_modules/promise-polyfill/dist/polyfill.js"),
      "select2":                path.resolve(__dirname,  "node_modules/select2/select2.js"),
      "showdown-prettify":      path.resolve(__dirname,  "node_modules/showdown-prettify/dist/showdown-prettify.min.js"),
      "screenful":              path.resolve(__dirname,  "node_modules/screenfull/dist/screenfull.js"),
      "slick-carousel":         path.resolve(__dirname,  "node_modules/slick-carousel/slick/slick.js"),
      "stickyfilljs":           path.resolve(__dirname,  "node_modules/stickyfilljs/dist/stickyfill.js"),
      "text":                   path.resolve(__dirname,  "node_modules/requirejs-text/text.js"),
      "tippy":                  path.resolve(__dirname,  "node_modules/tippy.js/umd/index.all.js"),
      "tippy-theme.css":        path.resolve(__dirname,  "node_modules/tippy.js/themes/light-border.css"),
      "validate":               path.resolve(__dirname,  "node_modules/validate.js/validate.js"),
      "moment-locale-bg":       path.resolve(__dirname,  "node_modules/moment/locale/bg"),
      "moment-locale-hr":       path.resolve(__dirname,  "node_modules/moment/locale/hr"),
      "moment-locale-cs":       path.resolve(__dirname,  "node_modules/moment/locale/cs"),
      "moment-locale-da":       path.resolve(__dirname,  "node_modules/moment/locale/da"),
      "moment-locale-nl":       path.resolve(__dirname,  "node_modules/moment/locale/nl"),
      "moment-locale-es":       path.resolve(__dirname,  "node_modules/moment/locale/es"),
      "moment-locale-fi":       path.resolve(__dirname,  "node_modules/moment/locale/fi"),
      "moment-locale-fr":       path.resolve(__dirname,  "node_modules/moment/locale/fr"),
      "moment-locale-de":       path.resolve(__dirname,  "node_modules/moment/locale/de"),
      "moment-locale-el":       path.resolve(__dirname,  "node_modules/moment/locale/el"),
      "moment-locale-hu":       path.resolve(__dirname,  "node_modules/moment/locale/hu"),
      "moment-locale-it":       path.resolve(__dirname,  "node_modules/moment/locale/it"),
      "moment-locale-lt":       path.resolve(__dirname,  "node_modules/moment/locale/lt"),
      "moment-locale-lv":       path.resolve(__dirname,  "node_modules/moment/locale/lv"),
      "moment-locale-mt":       path.resolve(__dirname,  "node_modules/moment/locale/mt"),
      "moment-locale-pl":       path.resolve(__dirname,  "node_modules/moment/locale/pl"),
      "moment-locale-pt":       path.resolve(__dirname,  "node_modules/moment/locale/pt"),
      "moment-locale-ro":       path.resolve(__dirname,  "node_modules/moment/locale/ro"),
      "moment-locale-sl":       path.resolve(__dirname,  "node_modules/moment/locale/sl"),
      "moment-locale-sk":       path.resolve(__dirname,  "node_modules/moment/locale/sk"),
      "moment-locale-es":       path.resolve(__dirname,  "node_modules/moment/locale/es"),
      "moment-locale-sv":       path.resolve(__dirname,  "node_modules/moment/locale/sv")
    }
  }
});

// For debugging uncomment the following line.
// console.log(JSON.stringify(config, null, 4));

module.exports = config;
