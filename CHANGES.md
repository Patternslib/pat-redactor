# Changelog



## [7.0.0](https://github.com/patternslib/pat-redactor/compare/6.0.1...7.0.0) (2022-06-28)


### Features


* **Build:** Build module federation enabled bundles. ([a099226](https://github.com/patternslib/pat-redactor/commit/a099226e486676eca482339133cf173c1a3e1f39))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([f369a75](https://github.com/patternslib/pat-redactor/commit/f369a75d86a95d8da6201286a42d281e3d3c6911))

* Extend babel config from @patternslib/dev. ([458d3c7](https://github.com/patternslib/pat-redactor/commit/458d3c7705339d1883feb834473945633cb9c63b))

* Extend commitlint config from @patternslib/dev. ([e72f8af](https://github.com/patternslib/pat-redactor/commit/e72f8afc3f22469d2b8b11f6937a130f1f8191d0))

* Extend eslint config from @patternslib/dev. ([d5bc9a0](https://github.com/patternslib/pat-redactor/commit/d5bc9a06396e990cbc799b2062f55a3739f807bc))

* Extend jest config from @patternslib/dev. ([8f2eae0](https://github.com/patternslib/pat-redactor/commit/8f2eae06854c35cb2e441893e52b7ad3aa4c1cbb))

* Extend Makefile from @patternslib/dev. ([2ad82e9](https://github.com/patternslib/pat-redactor/commit/2ad82e9c928407db1346ea6a8f5b15dfadc69494))

* Extend prettier config from @patternslib/dev. ([9cf1a7e](https://github.com/patternslib/pat-redactor/commit/9cf1a7eb39856342d9d147be58dfe6d4308fc88e))

* Extend release-it config from @patternslib/dev. ([1584d75](https://github.com/patternslib/pat-redactor/commit/1584d7581023345bcb31ddd34a29ec1b3af2ec86))

* Extend webpack config from @patternslib/dev. ([3428c99](https://github.com/patternslib/pat-redactor/commit/3428c999e0404e9c15e822cdb59c67d3720e5edb))


### Maintenance


* @patternslib/patternslib needs to be installed. Adding to devDependencies to avoid version clashes with other packages depending on it. ([bc2704b](https://github.com/patternslib/pat-redactor/commit/bc2704bc8d9b4118629ce24a10e4d386fd2e3120))

* Do not build a bundle and do not upload any assets to GitHub due to redactor being proprietary software. ([2f4265b](https://github.com/patternslib/pat-redactor/commit/2f4265bf6f34d82ee9d9023c13a2024ca9f7bebd))

* Upgrade to @patternslib/dev 2.2.0 and adapt module federation config. ([5fb5e08](https://github.com/patternslib/pat-redactor/commit/5fb5e08ff8d8a1ab94e6f61adc47ecddcbf13652))

* Upgrade underscore to 1.13.4. ([dea494d](https://github.com/patternslib/pat-redactor/commit/dea494dc4e59530765e3f92ebe694e94940eee19))

* **build:** Add build:dev script to package.json to create a unminified development build. ([7a0db7f](https://github.com/patternslib/pat-redactor/commit/7a0db7fa1a572ce41971e0cbef4bcb2d20a7e14a))

* **Build:** @patternslib/patternslib as peerDependency. ([9af550f](https://github.com/patternslib/pat-redactor/commit/9af550fa060cfca71a84d0b54d54422f42efc490))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([cdf63bb](https://github.com/patternslib/pat-redactor/commit/cdf63bbf9c3126d7d99190e35d412a1a671dace6))

* **Build:** Add keyword "patternslib" to package.json. ([79b4cb9](https://github.com/patternslib/pat-redactor/commit/79b4cb934774c543a71856783f34c64ff8781e49))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([da62bf8](https://github.com/patternslib/pat-redactor/commit/da62bf8a87d87c6f66a2b3c52f99fe85a395f9e1))

* **Build:** Keep yarn.lock in repository. ([71299a8](https://github.com/patternslib/pat-redactor/commit/71299a84ca1f96886ff22e5e63b1929c8d8135b1))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([af4526a](https://github.com/patternslib/pat-redactor/commit/af4526a0d9ce651e0594a2b634f66e24c70f643e))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([7eb89b6](https://github.com/patternslib/pat-redactor/commit/7eb89b64f971c696dc38652e0d0694449555e4c3))

* **Build:** Update GitHub actions setup. ([d027474](https://github.com/patternslib/pat-redactor/commit/d0274744fc18799fce932702bbc8a68af5119412))

* **Build:** Upgrade and cleanup dependencies. ([96b7bcc](https://github.com/patternslib/pat-redactor/commit/96b7bcc75ce1a8a91b0eeffd9469888183f22022))

### [6.0.1](https://github.com/patternslib/pat-redactor/compare/6.0.0...6.0.1) (2022-03-24)


### Bug Fixes

* Add missing dependency underscore. ([63450c8](https://github.com/patternslib/pat-redactor/commit/63450c84ffa4b7d087b37509aee12f1436f0a1d2))



### Maintenance

* **webpack:** Configure devServer static directory. ([10a6470](https://github.com/patternslib/pat-redactor/commit/10a64704ba3ccce6b52521eaf6c2a9774972a31e))

## [6.0.0](https://github.com/patternslib/pat-redactor/compare/5.1.0...6.0.0) (2021-11-18)


### Breaking Changes

* Upgrade to Webpack 5. ([74c93e7](https://github.com/patternslib/pat-redactor/commit/74c93e7f63bb63930b91720fe5183d091cb3caff))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([fdc212b](https://github.com/patternslib/pat-redactor/commit/fdc212b72a068ff96dc343fdf26248eb0edafe74))

* **build:** Release on GitHub releases. ([e7be8a9](https://github.com/patternslib/pat-redactor/commit/e7be8a9bdb107637baa28bd48ae0cc457df42ae9))

* Upgrade up to minor versions. ([4353c62](https://github.com/patternslib/pat-redactor/commit/4353c62591102891a622de0624bf7d8efbb0f196))

## [5.1.0](https://github.com/patternslib/pat-redactor/compare/5.0.1...5.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([ad06883](https://github.com/patternslib/pat-redactor/commit/ad06883b8e7f379170b351fe40ee56cc6c2641b9))
* **dependencies:** Depend on Patternslib v4.4.0. ([76428f3](https://github.com/patternslib/pat-redactor/commit/76428f33188f5748bcc7125b47bd53ba2f015bca))
* **dependencies:** Upgrade dependencies on minor+patch level. ([011b8d1](https://github.com/patternslib/pat-redactor/commit/011b8d1130e04c129e6124116d36bca9f8f2bfde))
* **webpack:** Adapt start script to recent dependency changes. ([f716a4b](https://github.com/patternslib/pat-redactor/commit/f716a4b1e96bd01c7895ba43d7761cd4b1c714c4))
* **webpack:** Simplify webpack. ([5bbcb79](https://github.com/patternslib/pat-redactor/commit/5bbcb794c5873a3504237c1d60c8aeefa150f2c0))

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