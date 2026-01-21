// External dependencies
import React from 'react';

// Internal dependencies
import { Header } from '@/components/header/Header';

export interface LayoutProps {
	className?: string;
	children: React.ReactNode;
}

export const Layout = ({ className = '', children }: LayoutProps) => {
	return (
		<div className={`global-layout min-h-dvh flex flex-col ${className}`}>
			<Header />

			{children}

			<footer className="bg-gray-500">footer</footer>
		</div>
	);
};
