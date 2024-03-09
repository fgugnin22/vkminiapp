import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "../App";

const queryClient = new QueryClient();

export const Providers = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
