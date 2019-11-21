function docReady(fn) {
  // https://stackoverflow.com/a/9899701/1337474
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

define(["jquery", "pat-registry", "pat-redactor"], function($, registry) {

  var window = require("window");
  window.jQuery = $;
  window.jquery = $;

  docReady(registry.init);
  return registry;
});
