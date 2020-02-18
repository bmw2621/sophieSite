module.exports = {
  siteMetadata: {
    title: `Gatsby Drupal Tutorial`,
    description: `Learning to Build a Gatsby Blog with Drupal CMS.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://18.189.116.57/`,
      },
    },
    {
    resolve: `gatsby-source-youtube-v2`,
    options: {
      channelId: ['UC8SKDJE4tHZhiv04FYgXTHQ'],
      apiKey: "AIzaSyBolxK_najateJe9P6ZvrKmxIw7-mknIS0",
      maxVideos: 50 // Defaults to 50
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
