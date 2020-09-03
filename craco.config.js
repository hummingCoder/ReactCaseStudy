const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@font-family': 'Open Sans',
                            '@primary-color': '#014976',
                            '@secondary-color': '#F04E23',
                            '@dark-color': '#000',
                            '@yellow-color': '#ffca7a',
                            '@dark-yellow-color': '#f7a325',
                            '@link-color': '#014976',
                            '@heading-color': '#014976',
                            '@text-color' : '#000',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
