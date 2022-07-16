/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	images: {
		loader: "akamai",
		path: "",
	},
	basePath: "/alexribeirodesa-site",
	assetPrefix: "/alexribeirodesa-site",
}

module.exports = nextConfig
