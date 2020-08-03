
// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'es', // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true
  },
};
