module.exports = {
  trailingSlash: true, //colocar o / no final
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faq',
        permanent:true,
      }
    ]
  }
}