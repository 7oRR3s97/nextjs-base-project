import * as trpcNext from '@trpc/server/adapters/next';
import superjson from 'superjson';

import { createRouter, createContext } from '@server/context';
import { zipCodeRouter } from '@server/zipcode';

const appRouter = createRouter()
  .transformer(superjson)
  .merge('zipcode.', zipCodeRouter);

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  batching: {
    enabled: true,
  },
});
