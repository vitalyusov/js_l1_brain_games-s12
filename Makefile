install: 
	npm install

run:
	npm run babel-node -- './bin/$(G)'

publish: 
	npm publish

check:
	npm run flow

lint:
	npm run eslint