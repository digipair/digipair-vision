const tsconfig = require('../../tsconfig.base.json');
const alias = require('@rollup/plugin-alias');
const path = require('path');

function getRollupOptions(options) {
  const extraGlobals = {};
  const externals = options.output.format === 'cjs' ? ['@digipair-vision/core', '@digipair-vision/player', '@digipair-vision/router', '@digipair-vision/html', '@digipair-vision/mesh', '@digipair-vision/teleport', '@digipair-vision/screen-shared', '@digipair-vision/design-system', '@digipair-vision/scene', '@digipair-vision/ready-player-me', '@digipair-vision/camrender', '@digipair-vision/observe', '@digipair-vision/info', '@digipair-vision/exporter'] : [];

  const value = {
    ...options,
    external: name => {
      return externals.includes(name);
    },
    plugins: [
      ...options.plugins,
      alias({
        entries: Object.getOwnPropertyNames(tsconfig.compilerOptions.paths).map(property => ({
          find: property,
          replacement: path.resolve(tsconfig.compilerOptions.paths[property][0]),
        })),
      }),
    ],
    output: {
      ...options.output,
      globals: extraGlobals,
      plugins: [],
    },
  };

  return value;
}

module.exports = getRollupOptions;
