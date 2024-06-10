// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import alias from '@rollup/plugin-alias';
// import typescript from 'rollup-plugin-typescript2';
// import postcss from 'rollup-plugin-postcss';
// import babel from '@rollup/plugin-babel';
// import pkg from './package.json';

// const extensions = ['.js', '.jsx', '.ts', '.tsx'];
// process.env.BABEL_ENV = 'production';

// // eslint-disable-next-line import/no-anonymous-default-export
// export default [
//   {
//     input: 'src/index.ts',
//     output: [
//       {
//         file: path.dirname(process.env.npm_package_main),
//         format: 'cjs',
//         sourcemap: false,
//       },
//       {
//         file: path.dirname(process.env.npm_package_module),
//         format: 'esm',
//         sourcemap: false,
//       },
//     ],
//     external: [/node_modules/],
//     plugins: [
//       alias({
//         entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
//       }),
//       peerDepsExternal(),
//       resolve({
//         extensions,
//       }),
//       commonjs(),
//       typescript({
//         tsconfig: './tsconfig.json',
//         clean: true,
//         sourceMap: false,
//       }),
//       postcss({
//         extensions: ['.scss'],
//       }),
//       json(),
//       babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
//     ],
//     // output: [
//     //   {
//     //     file: pkg.module, // 번들링한 파일을 저장 할 경로
//     //     format: 'es', // ES Module 형태로 번들링함
//     //   },
//     // ],
//   },

//   {
//     input: 'dist/index.d.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'es' }],
//     plugins: [dts()],
//     external: [/\.(css|less|scss)$/],
//   },
//   {
//     input: 'src/index.ts',
//     output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
//   },
//   //   plugins: [
//   //     dts(),
//   //     alias({
//   //       entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
//   //     }),
//   //   ],
//   // },
// ];

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import dts from 'rollup-plugin-dts';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        dir: path.dirname(process.env.npm_package_main),
        format: 'cjs',
        // preserveModules: true,
        // preserveModulesRoot: 'src'
      },
      {
        dir: path.dirname(process.env.npm_package_module),
        format: 'es',
        exports: 'named',
      },
    ],
    external: [/node_modules/],
    plugins: [
      peerDepsExternal({
        includeDependencies: true,
      }),
      alias({
        entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      }),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      commonjs({ include: 'node_modules/**' }),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        sourceMap: false,
        declaration: true,
        declarationDir: 'dist',
        rootDir: 'src',
      }),
      terser(),
      postcss({
        extensions: ['.scss'],
        plugins: [],
      }),
      copy({
        targets: [
          { src: 'src/styles/global.scss', dest: 'dist', rename: 'index.css' }, // 스타일 파일 복사
        ],
      }),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/],
  },
];
