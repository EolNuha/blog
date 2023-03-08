// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//deploy command: cmd /C 'set "GIT_USER=eolnuha" && yarn deploy'

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The InnoHive',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://eolnuha.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'eolnuha', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    
    [
      '@docusaurus/preset-classic',
      {
        gtag: {
          trackingID: 'G-2NV9MCXC3E',
          anonymizeIP: true,
        },
        docs: {
          // id: 'product', // omitted => default instance
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // ... other options
        },
        blog: {
          showReadingTime: true,
          path: 'posts',
          routeBasePath: 'posts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/blog/docs/**', '/docs/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      '@docusaurus/plugin-content-docs',

      {
        id: 'python',
        path: 'python',
        routeBasePath: 'python',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
  // themes: ['@docusaurus/theme-classic'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      algolia: {
        // The application ID provided by Algolia
        appId: 'KZI8MSTZGM',

        // Public API key: it is safe to commit it
        apiKey: 'f81670a54ed74caea7efef22ec931e46',

        indexName: 'dev_theinnohive',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      image: 'img/logo-left.png',
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-left.png',
        },
        items: [
          {to: '/tutorials', label: 'Tutorials', position: 'left'},
          {to: '/posts', label: 'Posts', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://www.buymeacoffee.com/eolnuha" target="_blank" class="buy-me-coffee-icon">'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Features',
            items: [
              {
                label: 'Tutorials',
                to: '/tutorials',
              },
              {
                label: 'Posts',
                to: '/posts',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/14683130/eol-nuha',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/eolnuha',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portfolio',
                href: 'https://eolnuha.github.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EolNuha',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: '+383-49-793-208',
                to: 'tel:+38349793208',
              },
              {
                label: 'eol.nuha22@gmail.com',
                to: 'mailto:eol.nuha22@gmail.com',
              },
              {
                html: '<p>Pristina, Kosovo</p>'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The InnoHive.`,
        logo: {
          src: 'img/logo-top.png',
          alt: 'The innohive logo',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
