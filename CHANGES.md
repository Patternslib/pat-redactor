### [5.0.1](https://github.com/patternslib/pat-redactor/compare/5.0.0...5.0.1) (2021-04-23)


### Bug Fixes

* Fix this reference and do throw the input-chaged event after updates. ([c9484e9](https://github.com/patternslib/pat-redactor/commit/c9484e930e1a2411f3b97eb6f8e0d9e033aed5f1))
* **Webpack:** Fix alias for redactor. ([e59624e](https://github.com/patternslib/pat-redactor/commit/e59624e64b81140504205d27864dda7fec4cc166))


### Maintenance

* **make release-patch:** Add missing patch for patch level releases. ([360ca15](https://github.com/patternslib/pat-redactor/commit/360ca15266114bea56085d650bd6d292b1dcc0d4))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([d8430b5](https://github.com/patternslib/pat-redactor/commit/d8430b510449d4779100f78d13e905e76494362d))
* **Release process:** Do not include the release commit in the changelog. ([0e5d47a](https://github.com/patternslib/pat-redactor/commit/0e5d47aecab602d33e7216d8763a3485c93470cd))
* Fix demo to include correct bundle. ([d799c4c](https://github.com/patternslib/pat-redactor/commit/d799c4c60addb8a2ea26566c20b36d1d34ebbdb8))

## [5.0.0](https://github.com/patternslib/pat-redactor/compare/0.0.2...5.0.0) (2021-04-20)


### Features

* Import styles in JavaScript and remove the _pat-redactor.scss file. ([1e1e53e](https://github.com/patternslib/pat-redactor/commit/1e1e53e4f70da188d28a3e9c1ac409226214b997))


### Maintenance

* Add basic tests. ([199bc43](https://github.com/patternslib/pat-redactor/commit/199bc436b8d548f10b94d2212d67a9026fc1d550))
* Remove release-web and add note about Redactor beiing a commercial product and cannot be included. ([a4b098c](https://github.com/patternslib/pat-redactor/commit/a4b098c8dbdeff12c842d26a5df07a3476b058f2))
* Upgrade to Patternslib v4 final - redactor customizations. ([eab86a3](https://github.com/patternslib/pat-redactor/commit/eab86a3b6e98f7662595add1a483c7aac016bfd1))
* Upgrade to Patternslib v4 final. ([433b2a2](https://github.com/patternslib/pat-redactor/commit/433b2a2e2f27f676f52015f8007d0afc109df7d9))

# Changelog


## 4.0.0 - unreleased

- Upgrade to ES6.
- Implenent lazy loading for external libraries via dynamic imports.
- Only load plugins if they are configured to be loaded.
- Add "specialchars" and "widget" plugins.
- Adapt to new redactor package structure.
  All redactor files are in src/ subfolder.


## 3.3.4 - unreleased

- Upgrade to Redactor 3.3.4.
  [thet]


## 3.0.0 - November 21, 2019

- Upgrade to Redactor 3.
  [thet]

- Use Webpack as build environment.
  [thet]


## 2.0.0 - January 20, 2016

- Added the bufferbuttons plugin
  [ale-rt]

- Support for redactor II

## 0.0.1 - September 28, 2015

- Initial release of pat-redactor.
