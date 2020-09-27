module.exports = {
  siteMetadata: {
    title: `Zach Johnson, Developer`,
    description: `Zach Johnson's Portfolio.`,
    author: `Zach Johnson`,
    aboutMe: `I am a web developer with a passion for research and problem solving.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    { resolve:`gatsby-plugin-sharp`,
    options: {
      width: 300,
      height: 300,
      resize: 'cover'
    }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-179138898-1'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts/images`,
      },
    },
  ],
}
