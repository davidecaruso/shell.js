let hook = require('css-modules-require-hook');
let sass = require('node-sass');
let path = require('path');

hook({
    extensions: ['.scss'],
    preprocessCss: (css, filepath) => {
        return sass.renderSync({
            data: css,
            includePaths: [path.resolve(filepath, '..')]
        }).css;
    }
});
