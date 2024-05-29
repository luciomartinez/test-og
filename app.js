const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  const ua = req.get('User-Agent') ?? 'unknown';
  console.log(ua);
  const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>T: ${ua}</title>
    <meta
      name="description"
      content="D: ${ua}" />
  </head>
  <body>B: ${ua}</body>
</html>
`;
  res.type('html').send(html)
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

