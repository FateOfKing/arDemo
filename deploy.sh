
# 构建
yarn build
git add .
git commit -m 'build'
git push

cp -R  "/Users/king/Documents/GitHub/arDemo/dist/" "/Users/king/Desktop/dist"

git checkout "gh-pages"

cp -R  "/Users/king/Desktop/dist/" "/Users/king/Documents/GitHub/arDemo" 

git add .
git commit -m 'release'
git push

git checkout "main"