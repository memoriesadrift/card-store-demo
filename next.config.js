const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'http://wwwlab.cs.univie.ac.at/~sulovskys00/card-store/' : '',
  basePath: isProd ? '/~sulovskys00/card-store' : '',
}
