const path = require('path');

const modifyWebpackConfig = (webpackConfig, settings) => {
  if (settings.isServer) {
    webpackConfig.externals = ['@tanstack/react-query', ...webpackConfig.externals];
  }

  const reactQuery = path.resolve(require.resolve('@tanstack/react-query'), '../../../');

  webpackConfig.resolve.alias = {};
  webpackConfig.resolve.alias['@tanstack/react-query'] = reactQuery;
  webpackConfig.resolve.alias['@tanstack/react-query/devtools'] = path.resolve(reactQuery, 'devtools');

  return webpackConfig;
};

module.exports = (config) => {
  config.development.open = '#/?spaceId=48C607A70B5A46A3864A34E2BDDDEA04';

  config.proxies = [
    {
      context: ['/api', '/public', '/availity', '/web', '/ms', '/static'],
      target: 'http://localhost:5050',
      enabled: true,
    },
  ];

  config.modifyWebpackConfig = modifyWebpackConfig;

  return config;
};
