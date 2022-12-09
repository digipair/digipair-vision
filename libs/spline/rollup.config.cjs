const { terser } = require('rollup-plugin-terser');

function getRollupOptions(options) {
  const extraGlobals = {};
  const bundled = ['@splinetool/loader'];
  const externals = [
    'three',
    'three/examples/jsm/loaders/DRACOLoader.js',
    'three/examples/jsm/utils/BufferGeometryUtils.js',
  ];

  return {
    ...options,
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
