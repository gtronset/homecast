if(process.env.NODE_ENV === 'production' || process.env.NODE_ENV=== 'distribution') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    };
}