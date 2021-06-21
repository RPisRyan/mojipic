module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript'
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
  devOptions: {},
  installOptions: {
    installTypes: true,
  },
}
