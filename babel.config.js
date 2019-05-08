module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/env',
      {
        targets: ['last 2 versions', 'ie >= 7']
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
}
