const { terser } = require('rollup-plugin-terser');

function getRollupOptions(options) {
  const extraGlobals = {};

  if (Array.isArray(options.output)) {
    options.output.forEach((o) => {
      o.globals = { ...o.globals, ...extraGlobals };
    });
  } else {
    options.output = {
      ...options.output,
      globals: {
        ...options.output.globals,
        ...extraGlobals,
      },
    };
  }

  const bundled = [
    'lit',
    'lit/decorators.js',
    'lit/directives/unsafe-html.js',
    'reflect-metadata',
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
      plugins: [terser()],
    },
  };
}

module.exports = getRollupOptions;
