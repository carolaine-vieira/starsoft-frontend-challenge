// External dependencies
import React from 'react';

// Internal dependencies
import { Layout } from './layout';
import { ReactQueryProvider } from './react-query';
import { ReduxProvider } from './redux';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ReactQueryProvider>
			<ReduxProvider>
				<Layout>{children}</Layout>
			</ReduxProvider>
		</ReactQueryProvider>
	);
}
