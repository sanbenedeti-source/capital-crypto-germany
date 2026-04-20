import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://www.googletagmanager.com
    https://www.google-analytics.com
    https://connect.facebook.net
    https://www.googleadservices.com
    https://googleads.g.doubleclick.net
    https://www.google.com;
  connect-src 'self'
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://www.googletagmanager.com
    https://www.googleadservices.com
    https://googleads.g.doubleclick.net
    https://www.google.com
    https://stats.g.doubleclick.net
    https://www.facebook.com
    https://connect.facebook.net;
  img-src 'self' data: blob:
    https://www.google-analytics.com
    https://region1.google-analytics.com
    https://www.googletagmanager.com
    https://www.googleadservices.com
    https://googleads.g.doubleclick.net
    https://www.google.com
    https://stats.g.doubleclick.net
    https://www.facebook.com
    https://www.facebook.net;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
  frame-src 'self'
    https://www.google.com
    https://www.googletagmanager.com;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;