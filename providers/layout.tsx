// External dependencies
import React from 'react';

// Internal dependencies
import { Header } from '@/components/header/Header';
import { SidebarCart } from '@/components/sidebar-cart/SidebarCart';

export interface LayoutProps {
	className?: string;
	children: React.ReactNode;
}

export const Layout = ({ className = '', children }: LayoutProps) => {
	return (
		<div className={`global-layout min-h-dvh flex flex-col ${className}`}>
			<Header />

			<SidebarCart />

			{children}

			<footer className="bg-gray-500">footer</footer>
		</div>
	);
};
