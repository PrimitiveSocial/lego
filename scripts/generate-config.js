const path = require('path');
const fs = require('fs');
const appRoot = path.resolve(__dirname);

fs.copyFile('src/config/lego.config.js', appRoot+'/lego.config.js', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('lego.config.js was generated in ' + appRoot);
    }
});
