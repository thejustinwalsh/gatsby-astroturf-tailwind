const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")
const postcssNested = require("postcss-nested")
const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: "/gatsby-astroturf-tailwind",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindcss, autoprefixer, postcssNested],
      },
    },
    {
      resolve: `gatsby-plugin-astroturf`,
      options: {
        enableDynamicInterpolations: true,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/page-2/`, `/using-typescript/`],
      },
    },
  ],
}
