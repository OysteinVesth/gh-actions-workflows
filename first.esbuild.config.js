const esbuild = require('esbuild')

// Automatically exclude all node_modules from the bundled version
esbuild.build({
  entryPoints: ['first/index.ts'],
  outfile: 'first/lib/index.js',
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  target: 'node16',
}).catch(() => process.exit(1))
