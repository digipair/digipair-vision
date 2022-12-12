const { terser } = require('rollup-plugin-terser');
const alias = require('@rollup/plugin-alias');

function getRollupOptions(options) {
  const extraGlobals = {};
  const bundled = ['@splinetool/loader'];
  const externals = [];

  return {
    ...options,
    plugins: [
      ...options.plugins,
      alias({
        entries: [
          { find: 'three/examples/jsm/loaders/DRACOLoader.js', replacement: 'libs/spline/src/lib/vendors/DRACOLoader.js' },
          { find: 'three/examples/jsm/utils/BufferGeometryUtils.js', replacement: 'libs/spline/src/lib/vendors/BufferGeometryUtils.js' },
          { find: 'three', replacement: 'libs/spline/src/lib/vendors/three.js' },
        ]
      })
    ],
    external: (name) => {
      if (bundled.includes(name)) {
        return false;
      }

      if (externals.includes(name)) {
        return true;
      }

      return options.external(name);
    },
    output: {
      ...options.output,
      globals: extraGlobals,
      plugins: [terser()],
    },
  };
}

module.exports = getRollupOptions;
