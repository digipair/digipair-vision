const { terser } = require('rollup-plugin-terser');

function getRollupOptions(options) {
  const extraGlobals = {};
  const bundled = ['aframe-blink-controls', 'super-hands'];

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
