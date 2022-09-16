import { join } from 'path'

export const entry = ['./client/index.js']
export const output = {
  // eslint-disable-next-line no-undef
  path: join(__dirname, '..', 'server', 'public'),
  filename: 'bundle.js',
}
export const mode = 'development'
export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.mp3$/,
      loader: 'file-loader',
    },
  ],
}
export const resolve = {
  extensions: ['.js', '.jsx'],
}
export const devtool = 'source-map'
