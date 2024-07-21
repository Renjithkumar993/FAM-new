import express from 'express';
import path from 'path';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App';

const PORT = 3000;
const app = express();

// Serve static files from the build directory
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Middleware to handle nested routes for static files
app.use('/events/static', express.static(path.resolve(__dirname, '..', 'build/static')));
app.use('/events/images', express.static(path.resolve(__dirname, '..', 'build/images')));

// Universal route handler for all GET requests
app.get('*', (req, res) => {
  const context = {};

  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve(__dirname, '..', 'build', 'index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    );
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
