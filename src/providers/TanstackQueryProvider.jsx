//tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function TanstackQueryProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
}

export default TanstackQueryProvider;
