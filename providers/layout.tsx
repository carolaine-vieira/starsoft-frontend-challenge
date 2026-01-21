// External dependencies
import React from "react";

export interface LayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const Layout = ({ className = "", children }: LayoutProps) => {
  return (
    <div className={`global-layout min-h-dvh flex flex-col ${className}`}>
      <header className="bg-gray-500">header</header>

      {children}

      <footer className="bg-gray-500">footer</footer>
    </div>
  );
};
