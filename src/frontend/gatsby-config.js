const path = require('path');

/**
 * Try to load an .env from the root telescope project
 */
require('dotenv').config({
  path: path.join(__dirname, '../../', '.env'),
});

/**
 * The URL that points at our desired telescope API.
 * Set this via API_URL in your .env to be one of
 * localhost, staging, or production.  If you don't
 * specify it, it will (likely) be http://localhost:3000.
 *
 * NOTE: for our Zeit Now builds, we specify the staging URL
 * in our now.json file.
 */
const telescopeUrl = process.env.API_URL || `http://localhost:${process.env.PORT || 3000}`;

module.exports = {
  siteMetadata: {
    title: `Telescope`,
    description: `A tool for tracking blogs in orbit around Seneca's open source involvement`,
    author: `SDDS Students and professors`,
    telescopeUrl,
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
        name: `gatsby-for-telescope`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};