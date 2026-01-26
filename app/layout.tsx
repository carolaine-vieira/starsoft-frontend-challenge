// External dependencies
import { Poppins } from 'next/font/google';

// Internal dependencies
import Providers from '../providers/providers';
import '../styles/index.scss';

const poppins = Poppins({
	variable: '--font-poppins',
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
