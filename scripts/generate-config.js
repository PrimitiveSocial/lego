const path = require('path');
const fs = require('fs');
const scriptsDir = path.resolve(__dirname);

fs.copyFile( scriptsDir + '/../src/config/lego.config.js', process.env.PWD +'/lego.config.js', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('lego.config.js was generated in ' + process.env.PWD);
    }
});
