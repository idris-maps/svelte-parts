rm -rf _site \
&& rm -rf dist \
&& npm run build:components \
&& npm run build:11ty \
&& mkdir _site/js \
&& cp -avr dist/* _site/js/ \
&& cp -avr src/_includes/*.css _site/