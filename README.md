pat-redactor
============

A Patternslib plugin for redactor.

:warning: If you want to build and use this Pattern you need a [Redactor 3](https://imperavi.com/redactor/log/) release a folder above the checkout of this repository.
Redactor is a properitary WYSIWYG editor for the web with a commercial license which cannot be included here.


Usage
-----

To convert any textarea to a redactor-enabled editor just give it the class `pat-redactor`.

The following key/values are supported in the `data-pat-redactor` data attribute:

* `toolbar-type` with values being `standard`, `fixed` or `air`
* `toolbar-external` with a css-selector value pointing to the external toolbar element.
* `toolbar-fixed-target` with a css-selector pointing to the layer of the toolbar.
* `buttons` as a comma/space separated list of buttons you wish to have available on the editor.
* `air-buttons` the buttons in the *air* menu by use of if you have specified `air` as the toolbar type.
* `allowed-tags` or `denied-tags` as a comma/space separated list of allowed/not-allowed html tags.
* `file-upload` as a url where file uploads are going to be posted to.
* `image-upload` as a url where image uploads are going to be posted to.


Installation
------------

Download redactor.js and unzip the the file in a directory named `redactor` one level above this directory.

In your console,

	npm install
	gulp bower
	gulp

