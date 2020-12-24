/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: " some random description",
    author: "JOHN DOE",
    data: ["item 1", "itme 2"],
    person: { name: "peter", age: 22 },
  },

  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `y8b9bsura0cl`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `5IdpUJ7HYDmz7utjinJ_32wBt8ATNL_ByTL4Ocrm01s`,
      },
    },
  ],
}
