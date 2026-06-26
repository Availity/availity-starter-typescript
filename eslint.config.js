import workflow from 'eslint-config-availity/workflow';

export default [
  ...workflow,
  {
    ignores: ['dist/', 'static/'],
  },
];
