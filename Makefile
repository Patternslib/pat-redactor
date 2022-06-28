-include .env
export

ESLINT ?= npx eslint
YARN   ?= npx yarn


.PHONY: install
stamp-yarn install:
	$(YARN) install
	# Install pre commit hook
	$(YARN) husky install
	touch stamp-yarn


clean-dist:
	rm -Rf dist/


.PHONY: clean
clean: clean-dist
	rm -f stamp-yarn
	rm -Rf node_modules/


.PHONY: eslint
eslint: stamp-yarn
	$(ESLINT) ./src


.PHONY: check
check:: stamp-yarn eslint
	$(YARN) run test


.PHONY: bundle
bundle: stamp-yarn
	$(YARN) run build


# If you want to release on GitHub, make sure to have a .env file with a GITHUB_TOKEN.
# Also see:
#	https://github.com/settings/tokens
#	and https://github.com/release-it/release-it/blob/master/docs/github-releases.md#automated


.PHONY: release-major
release-major: check
	npx release-it major && \
		npx release-it --github.release --github.update --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: release-minor
release-minor: check
	npx release-it minor && \
		npx release-it --github.release --github.update --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: release-patch
release-patch: check
	npx release-it patch && \
		npx release-it --github.release --github.update --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: prerelease-alpha
prerelease-alpha: clean install
	npx release-it --preRelease=alpha && \
		npx release-it --github.release --github.update --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md

.PHONY: prerelease-beta
prerelease-beta: clean install
	npx release-it --preRelease=beta && \
		npx release-it --github.release --github.update --no-github.draft --no-increment --no-git --no-npm && \
		git checkout CHANGES.md


.PHONY: serve
serve: stamp-yarn
	$(YARN) run start


#
