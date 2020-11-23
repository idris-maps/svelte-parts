rm -rf _site \
&& rm -rf dist \
&& npm run build:components \
&& npm run build:11ty \
&& mkdir _site/js \
&& cp -avr dist/* _site/js/ \
&& cp -avr src/_includes/*.css _site/ \
&& cp -avr node_modules/leaflet/dist/leaflet.css _site/leaflet.css \
&& mkdir _site/map/images \
&& cp -avr node_modules/leaflet/dist/images/* _site/map/images/
