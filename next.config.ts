import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	turbopack: {
		root: __dirname,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'softstar.s3.amazonaws.com',
			},
		],
		qualities: [75, 100],
	},
};

export default nextConfig;
