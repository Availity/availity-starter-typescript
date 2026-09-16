/** @type {import('@availity/workflow').WorkflowConfigFunction} */
export default (config) => {
  config.app.title = 'Appeal Request Form';
  config.development.open = '#/?spaceId=48C607A70B5A46A3864A34E2BDDDEA04';

  // Coverage configuration — enabled automatically when --coverage flag is passed
  config.development.vitestOverrides = {
    ...config.development.vitestOverrides,
    coverage: {
      provider: 'istanbul',
      include: ['project/app/**/*.{ts,tsx}'],
      exclude: ['project/app/**/index.tsx', '**/*.test.{ts,tsx}', '**/*.d.ts', 'node_modules/'],
    },
  };

  return config;
};
