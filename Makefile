deploy: install
	yarn build
	yarn deploy
install:
	yarn install
serve:
	yarn serve

optimise-images:
	find src/images -type f -name '*.jpg' -exec jpegoptim --strip-all --all-progressive --max=80 --force {} \;
	find src/images -type f -name '*.png' -exec optipng -o7 {} \;