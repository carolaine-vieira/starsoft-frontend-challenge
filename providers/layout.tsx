// External dependencies
import React from 'react';

// Internal dependencies
import { Header } from '@/components/header/Header';
import { SidebarCart } from '@/components/sidebar-cart/SidebarCart';
import { Footer } from '@/components/footer/Footer';

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

			<Footer text="STARSOFT © TODOS OS DIREITOS RESERVADOS" />
		</div>
	);
};
