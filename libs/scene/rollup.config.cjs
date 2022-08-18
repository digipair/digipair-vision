const { terser } = require('rollup-plugin-terser');

function getRollupOptions(options) {
  const extraGlobals = {};
  const bundled = [
    'aframe-extras',
    'aframe-physics-extras',
    'aframe-physics-system/dist/aframe-physics-system.js',
    'aframe-rounded',
    'networked-aframe',
  ];

  return {
    ...options,
    external: (name) => {
      if (bundled.includes(name)) {
        return false;
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
