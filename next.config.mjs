/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
				pathname: '/**',
			},
			{
        protocol: "https",
        hostname: "tenor.com/"
			},
		],
	},
}
export default nextConfig
