import { router } from '@/server/trpc';
import { pokemonRouter } from './routers/pokemon';

export const appRouter = router({
  pokemon: pokemonRouter,
});

export type AppRouter = typeof appRouter;
