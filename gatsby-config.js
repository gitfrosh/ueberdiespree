module.exports = {
  siteMetadata: {
    title: `ueberdiespree.de`,
    siteUrl: `https://www.ueberdiespree.de`,
    description: `Hi, my name is Ulrike Exner. I am a web developer from Berlin.`,
    author: `@frankanka`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ueberdiespree.de`,
        short_name: `ueberdiespree.de`,
        start_url: `/`,
        background_color: `#ececec`,
        theme_color: `#ececec`,
        display: `minimal-ui`,
        // icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
        icons: [{
          "src": "/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png"
        },{
            "src": "/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },{
            "src": "/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },{
            "src": "/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },{
            "src": "/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },{
            "src": "/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },{
            "src": "/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },{
            "src": "/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          } ], // Add or remove icon sizes as desired
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
