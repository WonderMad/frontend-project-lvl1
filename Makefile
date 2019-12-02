install:
	npm install
setup:
	npm publish --dry-run
	sudo npm link
lint:
	npx eslint .
