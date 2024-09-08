// Não é necessário para a versão 12.0.4

const { redirect } = require('next/dist/server/api-utils')

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   output: 'export',
// }

module.exports = {
  //   nextConfig,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faq',
        permanent: true,
      },
    ]
  },
}
