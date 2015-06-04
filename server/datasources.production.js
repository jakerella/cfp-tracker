module.exports = {
  "db": {
    "name": "db",
    "connector": "mongodb",
    "url": "mongodb://tracker:" + (process.env.MONGO_PASS) + "@ds059661.mongolab.com:59661/conf-tracker"
  }
};
