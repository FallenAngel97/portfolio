module.exports = {
  pathPrefix: '/portfolio',
  siteMetadata: {
    title: 'Personal page of developer Alexey Demennikov',
    contacts: [
      {
        name: "VK",
        link: "https://vk.com/falleen_angel",
        text_color: '#fff',
        bg_color: '#4286f4'
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/alexei.demennikov",
        text_color: '#fff',
        bg_color: '#4153f4'
      },
      {
        name: "Twitter",
        link: "https://twitter.com/ADemennikov",
        text_color: '#fff',
        bg_color: '#1ae2f4'
      },
      {
        name: "Github",
        link: "https://github.com/FallenAngel97",
        text_color: '#000',
        bg_color: '#aab6b7'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /Windows_Store_Logo/ 
        }
      }
    }
  ]
}
