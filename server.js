
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
  }
  
  const express = require('express');
  const app = express();
  
  // app.use(requireHTTPS);
  app.use(express.static('./dist/angular-hellow'));
  
  app.get('/*', (req, res) =>
    {
      console.log("in GET ",req);
      res.sendFile('index.html', {root: 'dist/angular-hellow/'})
    },
  );
  
  console.log("hellow app is running with port", process.env.PORT);
  app.listen(process.env.PORT || 8080);
  console.log("App listening on ", process.env.PORT || 8080);
  