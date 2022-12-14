module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
                useBuiltIns: 'usage',
            },
        ],
    ],
    plugins: ['macros', 'babel-plugin-rewire'],
};
