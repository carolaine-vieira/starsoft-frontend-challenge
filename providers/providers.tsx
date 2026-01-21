"use client";

// External dependencies
import React from "react";

// Internal dependencies
import { Layout } from "./layout";
import { ReactQueryProvider } from "./react-query";
import { ReduxProvider } from "./redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <ReactQueryProvider>
        <ReduxProvider>{children}</ReduxProvider>
      </ReactQueryProvider>
    </Layout>
  );
}
