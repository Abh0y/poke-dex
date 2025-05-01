"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { api } from "@/utils/api";
import { CssBaseline } from "@mui/material";
import React from "react";
import RootLayout from "../components/RootLayout";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      {children}
    </QueryClientProvider>
  );
}

// Wrap RootLayout with withTRPC to provide tRPC context
export default api.withTRPC(function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <RootLayout>
      <Providers>
        <main style={{ flex: 1, padding: "2rem" }}>
          {children}
        </main>
      </Providers>
    </RootLayout>
  );
});
