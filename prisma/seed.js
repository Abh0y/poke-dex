// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // await prisma.pokemon.deleteMany();
  await prisma.pokemon.createMany({
   data : [
      {
        name: 'bulbasaur',
        types: 'grass,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png',
      },
      {
        name: 'ivysaur',
        types: 'grass,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/ivysaur.png',
      },
      {
        name: 'venusaur',
        types: 'grass,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/venusaur.png',
      },
      {
        name: 'charmander',
        types: 'fire',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/charmander.png',
      },
      {
        name: 'charmeleon',
        types: 'fire',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/charmeleon.png',
      },
      {
        name: 'charizard',
        types: 'fire,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/charizard.png',
      },
      {
        name: 'squirtle',
        types: 'water',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/squirtle.png',
      },
      {
        name: 'wartortle',
        types: 'water',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/wartortle.png',
      },
      {
        name: 'blastoise',
        types: 'water',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/blastoise.png',
      },
      {
        name: 'caterpie',
        types: 'bug',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/caterpie.png',
      },
      {
        name: 'metapod',
        types: 'bug',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/metapod.png',
      },
      {
        name: 'butterfree',
        types: 'bug,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/butterfree.png',
      },
      {
        name: 'weedle',
        types: 'bug,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/weedle.png',
      },
      {
        name: 'kakuna',
        types: 'bug,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/kakuna.png',
      },
      {
        name: 'beedrill',
        types: 'bug,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/beedrill.png',
      },
      {
        name: 'pidgey',
        types: 'normal,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/pidgey.png',
      },
      {
        name: 'pidgeotto',
        types: 'normal,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/pidgeotto.png',
      },
      {
        name: 'pidgeot',
        types: 'normal,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/pidgeot.png',
      },
      {
        name: 'rattata',
        types: 'normal',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/rattata.png',
      },
      {
        name: 'raticate',
        types: 'normal',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/raticate.png',
      },
      {
        name: 'spearow',
        types: 'normal,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/spearow.png',
      },
      {
        name: 'fearow',
        types: 'normal,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/fearow.png',
      },
      {
        name: 'ekans',
        types: 'poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/ekans.png',
      },
      {
        name: 'arbok',
        types: 'poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/arbok.png',
      },
      {
        name: 'pikachu',
        types: 'electric',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/pikachu.png',
      },
      {
        name: 'raichu',
        types: 'electric',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/raichu.png',
      },
      {
        name: 'sandshrew',
        types: 'ground',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/sandshrew.png',
      },
      {
        name: 'sandslash',
        types: 'ground',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/sandslash.png',
      },
      {
        name: 'nidoran♀',
        types: 'poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/nidoran-f.png',
      },
      {
        name: 'nidorina',
        types: 'poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/nidorina.png',
      },
      {
        name: 'nidoqueen',
        types: 'poison,ground',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/nidoqueen.png',
      },
      {
        name: 'nidoran♂',
        types: 'poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/nidoran-m.png',
      },
      {
        name: 'nidorino',
        types: 'poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/nidorino.png',
      },
      {
        name: 'nidoking',
        types: 'poison,ground',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/nidoking.png',
      },
      {
        name: 'clefairy',
        types: 'fairy',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/clefairy.png',
      },
      {
        name: 'clefable',
        types: 'fairy',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/clefable.png',
      },
      {
        name: 'vulpix',
        types: 'fire',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/vulpix.png',
      },
      {
        name: 'ninetales',
        types: 'fire',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/ninetales.png',
      },
      {
        name: 'jigglypuff',
        types: 'normal,fairy',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/jigglypuff.png',
      },
      {
        name: 'wigglytuff',
        types: 'normal,fairy',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/wigglytuff.png',
      },
      {
        name: 'zubat',
        types: 'poison,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/zubat.png',
      },
      {
        name: 'golbat',
        types: 'poison,flying',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/golbat.png',
      },
      {
        name: 'oddish',
        types: 'grass,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/oddish.png',
      },
      {
        name: 'gloom',
        types: 'grass,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/gloom.png',
      },
      {
        name: 'vileplume',
        types: 'grass,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/vileplume.png',
      },
      {
        name: 'paras',
        types: 'bug,grass',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/paras.png',
      },
      {
        name: 'parasect',
        types: 'bug,grass',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/parasect.png',
      },
      {
        name: 'venonat',
        types: 'bug,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/venonat.png',
      },
      {
        name: 'venomoth',
        types: 'bug,poison',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/venomoth.png',
      },
      {
        name: 'diglett',
        types: 'ground',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/diglett.png',
      },
      {
        name: 'dugtrio',
        types: 'ground',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/dugtrio.png',
      },
      {
        name: 'meowth',
        types: 'normal',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/meowth.png',
      },
      {
        name: 'persian',
        types: 'normal',
        sprite: 'https://img.pokemondb.net/sprites/home/normal/persian.png',
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
