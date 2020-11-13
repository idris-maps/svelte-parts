rm -rf temp/feather
rm -rf feather

mkdir -p temp/feather
mkdir feather

npx degit https://github.com/feathericons/feather/icons temp/feather

node feather.build.js
