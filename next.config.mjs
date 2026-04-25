/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isUserSite = repoName.endsWith(".github.io");
const basePath = isGithubPages && repoName && !isUserSite ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
};

export default nextConfig;
