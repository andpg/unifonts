{
  "name": "unifont",
  "version": "0.1.0",
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(js|css|img)/.*",
      "headers": { "cache-control": "max-age=31536000, immutable" }
    },
    { "handle": "filesystem" },
    { "src": ".*", "dest": "/" }
  ],
  "alias": "example.com"
}