require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Sophie Winchester`,
    description: `Healthy Living with Sophie Winchester | Live Healthy, Live Happy, Live Free`,
    author: `Benjamin Winchester`,
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
    {
    resolve: 'gatsby-source-s3',
    options: {
      aws: {
        accessKeyId: process.env.GATSBY_AWS_ACCESS_ID,
        secretAccessKey: process.env.GATSBY_AWS_ACCESS_SECRET,
      },
      buckets: ['sophiesiteassets'],
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
        icon: `src/images/sophie-icon.png`, // This path is relative to the root of the site.
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
      apiKey: process.env.GATSBY_YOUTUBE_API,
      maxVideos: 50 // Defaults to 50
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
