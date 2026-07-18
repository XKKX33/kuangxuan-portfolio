import type { NextConfig } from "next"

/** GitHub Pages project site: https://xkkx33.github.io/kuangxuan-portfolio/ */
const repoName = "kuangxuan-portfolio"
const useGithubPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true"
const basePath = useGithubPages ? `/${repoName}` : ""

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
