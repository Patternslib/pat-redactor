pat-packery
===========

Patternslib plugin for redactor

Usage
-----

To convert any textarea to a redactor-enabled editor just give it the class `pat-redactor`.

The following data attributes are supported:

* `data-redactor-buttons` as a comma/space seperated list of buttons you wish to have available on the editor.
* `data-redactor-allowed-tags` or `data-redactor-denied-tags` as a comma/space seperated list of allowed/not-allowed html tags.
* `data-file-upload` as a url where file uploads are going to be posted to.
* `data-image-upload` as a url where image uploads are going to be posted to.


Installation
------------

Download redactor.js and unzip the the file in a directory named `redactor`.

In your console,

	npm install
	gulp bower
	gulp

