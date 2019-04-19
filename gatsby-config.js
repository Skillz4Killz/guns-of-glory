module.exports = {
  siteMetadata: {
    title: `Guns of Glory Tracker`,
    description: `Track all your upgrades with your entire alliance to be the best!`,
    author: `@Skillz4Killz`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-firebase',
        short_name: 'starter',
        start_url: '/',
        background_color: '#ffb200',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-layout'
    // 'gatsby-plugin-offline',
  ],
}
