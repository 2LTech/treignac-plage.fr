/** @type {import('next-sitemap').IConfig} */
const sitemapConfig = {
  siteUrl: "https://treignac-plage.fr",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/legal",
      },
    ],
  },
};

export default sitemapConfig;
