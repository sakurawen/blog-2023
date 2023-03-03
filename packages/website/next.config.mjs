import nextMdx from '@next/mdx';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: true,
    typedRoutes: true,
  },
};

export default withMDX(nextConfig);
