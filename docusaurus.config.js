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
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Posts',
                to: '/posts',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
