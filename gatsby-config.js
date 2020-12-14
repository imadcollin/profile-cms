const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Profile`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: `j0zy5ma457je`,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/about/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/project/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Profile`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
  ],
}
