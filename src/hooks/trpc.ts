import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from 'pages/api/trpc/[trpc]';

const trpc = createReactQueryHooks<AppRouter>();

export const {
  Provider,
  createClient,
  useContext,
  useQuery,
  useMutation,
  useSubscription,
  useDehydratedState,
  useInfiniteQuery,
} = trpc;

export default trpc;
