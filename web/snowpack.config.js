module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    "@snowpack/plugin-optimize"
  ],
  devOptions: {},
  installOptions: {
    installTypes: true,
  },
}
