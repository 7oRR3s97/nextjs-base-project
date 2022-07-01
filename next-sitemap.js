/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://kizi.com.br',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ['/minhaconta', '/en/minhaconta', '/pt-br/minhaconta'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/minhaconta', '/en/minhaconta', '/pt-br/minhaconta'],
      },
    ],
  },
};
