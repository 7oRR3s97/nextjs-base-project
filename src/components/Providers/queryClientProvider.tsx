import React from 'react';
import {
  QueryClient,
  QueryClientProvider as QueryClientDefaultProvider,
} from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const QueryClientProvider: React.FC = ({ children }) => {
  return (
    <QueryClientDefaultProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientDefaultProvider>
  );
};

export default QueryClientProvider;
