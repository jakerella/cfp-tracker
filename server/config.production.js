module.exports = {
  "restApiRoot": "/api",
  "host": "0.0.0.0",
  "port": process.env.PORT || 80,
  "remoting": {
    "context": {
      "enableHttpContext": false
    },
    "rest": {
      "normalizeHttpPath": false,
      "xml": false
    },
    "json": {
      "strict": false,
      "limit": "100kb"
    },
    "urlencoded": {
      "extended": true,
      "limit": "100kb"
    },
    "cors": false,
    "errorHandler": {
      "disableStackTrace": true
    }
  },
  "legacyExplorer": false
};