const hook = require('css-modules-require-hook')
const sass = require('node-sass')
const path = require('path')

hook({
    extensions: ['.scss'],
    preprocessCss: (css, filepath) => {
        return sass.renderSync({ data: css, includePaths: [path.resolve(filepath, '..')] }).css
    },
})
