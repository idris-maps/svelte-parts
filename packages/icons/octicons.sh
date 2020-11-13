rm -rf temp/octicons
rm -rf octicons

mkdir -p temp/octicons
mkdir octicons

npx degit https://github.com/primer/octicons/icons temp/octicons

node octicons.build.js
