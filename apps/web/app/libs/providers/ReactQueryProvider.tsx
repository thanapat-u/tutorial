"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export type ReactQueryProviderProps = {
  children?: React.ReactNode;
};

const client = new QueryClient();

export default function ReactQueryProvider({ children }: ReactQueryProviderProps) {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
