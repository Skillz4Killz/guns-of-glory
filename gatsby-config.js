module.exports = {
  siteMetadata: {
    title: `Guns of Glory Tracker`,
    description: `Track all your upgrades with your entire alliance to be the best!`,
    author: `@Skillz4Killz`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GOGHUB',
        short_name: 'GOGHUB',
        short_name: "GoGHub",
        start_url: "/",
        background_color: "#bc9060",
        theme_color: "#050D18",
        display: 'fullscreen',
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    "gatsby-plugin-layout",
    // 'gatsby-plugin-offline',
  ],
}
