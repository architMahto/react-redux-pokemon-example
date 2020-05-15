import express from 'express'
import path from 'path'
import * as proxy from 'http-proxy-middleware'

const compression = require('compression');
const httpsRedirect = require('express-https-redirect');

const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV;
const app = express();
const pathToBuildDir = path.resolve(__dirname, '..', 'build');

app.use(compression());
app.use('/', httpsRedirect());

if (NODE_ENV === 'production') {
    app.use('/pokedex/', express.static(pathToBuildDir));

    app.get('/pokedex/*', (req, res) => {
      res.sendFile(path.resolve(pathToBuildDir, 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
