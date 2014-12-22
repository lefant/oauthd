// Here you can override any configuration field that is specifig to a local machine.
// The config.local.js is git ignored.

var local_config = {
  host_url: "http://oauthd.lefant.net/",
  port: process.env.PORT || 80,
  staticsalt: "keipaaxe2FohKoo6bouyeedohm0xah",
  publicsalt: "ohzuung6aethughuuxai3Be4Ieng0A"
};

if (process.env.REDISTOGO_URL) {
  var redis_conf = process.env.REDISTOGO_URL.match(/redis:\/\/(.+):(.+)@(.+):(.+)\//);
  local_config.redis = {
    port: redis_conf[4],
    host: redis_conf[3],
    password: redis_conf[2],
    database: redis_conf[1]
  }
}

module.exports = local_config;
