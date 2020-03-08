const withSass = require('@zeit/next-sass')
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = withSass({
    cssModules: true,

    webpack: (config, options) => {
        const {dev, isServer} = options
        // config.module.rules[1].exclude.push(resolve('./public/Icon'));
        config.module.rules.push({
            test: /\.svg$/,
            include: resolve('./public/Icon'),
            use: [
                {
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: 'icon-[name]'
                    }
                }
            ]
        })
        return config

    }
})