import { z } from 'zod';
import { prisma } from '@/server/db';
import { router, publicProcedure } from '@/server/trpc';
interface PokemonModel {
  id: number;
  name: string;
  types: string;
  sprite: string;
}

export const pokemonRouter = router({
  getPokemon: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const name = input.toLowerCase();
      const result = await prisma.pokemon.findFirst({
        where: { name },
      });

      if (!result) throw new Error('Pokemon not found');

      return {
        id: result.id,
        name: result.name,
        types: result.types.split(','),
        sprite: result.sprite,
      };
    }),
  getPokemonArray: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const lowerInput = input.map(name => name.toLowerCase());
      const results = await prisma.pokemon.findMany({
        where: { name: { in: lowerInput } },
      });

      return results.map((result: PokemonModel) => ({
        id: result.id,
        name: result.name,
        types: result.types.split(','),
        sprite: result.sprite,
      }));
    }),
  getAllTypes: publicProcedure
    .query(async () => {
      const results = await prisma.pokemon.findMany({
        select: { types: true },
      });
      const typeSet = new Set<string>();
      results.forEach((p: { types: string }) => p.types.split(',').forEach((t: string) => typeSet.add(t.trim())));
      return Array.from(typeSet);
    }),
  getPokemonByType: publicProcedure
    .input(z.object({
      type: z.string(),
      limit: z.number().min(1).optional(),
      skip: z.number().min(0).optional(),
    }))
    .query(async ({ input }) => {
      const { type, limit = 10, skip = 0 } = input;
      const totalCount = await prisma.pokemon.count({
        where: {
          types: {
            contains: type.toLowerCase(),
          },
        },
      });
      const results = await prisma.pokemon.findMany({
        where: {
          types: {
            contains: type.toLowerCase(),
          },
        },
        skip,
        take: limit,
      });

      return {
        totalCount,
        pokemons: results.map((result: PokemonModel) => ({
          id: result.id,
          name: result.name,
          types: result.types.split(','),
          sprite: result.sprite,
        })),
      };
    }),
  getAllPokemon: publicProcedure
    .input(z.object({
      limit: z.number().min(1).optional(),
      skip: z.number().min(0).optional(),
    }))
    .query(async ({ input }) => {
      const { limit = 10, skip = 0 } = input;
      const totalCount = await prisma.pokemon.count();
      const results = await prisma.pokemon.findMany({
        skip,
        take: limit,
      });
      return {
        totalCount,
        pokemons: results.map((result: PokemonModel) => ({
          id: result.id,
          name: result.name,
          types: result.types.split(','),
          sprite: result.sprite,
        })),
      };
    }),
});