const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Stino',
    metatags: [
      {
        name: 'description',
        content: `A driven front-end developer with an untamable passion for JavaScript & the latest frameworks working with it. Whether its front-end or backend, JavaScript is the way to do it.`,
      },
      {
        name: 'keywords',
        content:
          'javascript, developer, front-end, backend, fullstack, full stack, react, reactjs, js, vue, vuejs, sass, scss, node, firebase, graphql',
      },
    ],
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://stino.js.org`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
  ],
}
