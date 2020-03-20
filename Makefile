BOWER       ?= node_modules/.bin/bower
HTTPSERVE   ?= node_modules/.bin/http-server

all:: build

########################################################################
## Install dependencies

stamp-npm: package.json
	npm install
	touch stamp-npm

stamp-bower: stamp-npm
	$(BOWER) install
	touch stamp-bower

build: stamp-npm stamp-bower

clean::
	rm -f stamp-npm stamp-bower
	rm -rf node_modules src/bower_components ~/.cache/bower

make serve::
	npm run start

designerhappy:: stamp-npm stamp-bower
	printf "\n\n Designer, you can be happy now.\n Go to http://localhost:4001/ to see a demo \n\n\n\n"
	npm run start
