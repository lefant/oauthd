heroku create
heroku config:add BUILDPACK_URL=https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git
heroku addons:add redistogo
heroku addons:add papertrail

#edit config.local.js
git add config.local.js
git commit -m "update config.local.js with herokuapp url"

git push heroku HEAD:master


TODO: consider config vars for the url
