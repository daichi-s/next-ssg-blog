const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  env: {
    BLOG_TITLE: process.env.BLOG_TITLE,
  },
});