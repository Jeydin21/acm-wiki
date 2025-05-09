import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ACM UTD Wiki',
  tagline: 'Learn more about the ACM divisions, projects, and core infrastructure',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://acm-utd-wiki.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Wiki',
      logo: {
        alt: 'ACM Logo',
        src: 'img/logo-black.svg',
        srcDark: 'img/logo-white.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Jeydin21/acm-wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portal',
          items: [
            {
              label: 'Docs',
              to: '/docs/about',
            }
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/acmutd/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/acmutd',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/acmutd',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/acmutd',
            },
            {
              label: 'Discord',
              href: 'https://acmutd.co/discord',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Leadership Site',
              href: 'https://leadership.acmutd.co',
            },
            {
              label: 'ACM Website',
              href: 'https://acmutd.co',
            },
            {
              label: 'ACM Portal',
              href: 'https://portal.acmutd.co',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ACM UTD Wiki. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
