const { terser } = require('rollup-plugin-terser');
const tsconfig = require('../../tsconfig.base.json');
const alias = require('@rollup/plugin-alias');

function getRollupOptions(options) {
  const extraGlobals = {};
  const externals = [];

  const value = {
    ...options,
    plugins: [
      ...options.plugins,
      alias({
        entries: [],
      }),
    ],
    external: (name) => {
      if (externals.includes(name)) {
        return true;
      }

      return false;
    },
    plugins: [
      ...options.plugins,
      alias({
        entries: [
          ...Object.getOwnPropertyNames(tsconfig.compilerOptions.paths).map(
            (property) => ({
              find: property,
              replacement: tsconfig.compilerOptions.paths[property][0],
            })
          ),
          {
            find: 'three/examples/jsm/loaders/DRACOLoader.js',
            replacement: 'libs/spline/src/lib/vendors/DRACOLoader.js',
          },
          {
            find: 'three/examples/jsm/utils/BufferGeometryUtils.js',
            replacement: 'libs/spline/src/lib/vendors/BufferGeometryUtils.js',
          },
          {
            find: 'three',
            replacement: 'libs/spline/src/lib/vendors/three.js',
          },
        ],
      }),
    ],
    output: {
      ...options.output,
      globals: extraGlobals,
      plugins: [terser()],
    },
  };

  return value;
}

module.exports = getRollupOptions;
