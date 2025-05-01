import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type Pokemon = {
  id: number;
  name: string;
  types: string[];
  sprite: string;
};

import { PokemonTypeChips } from "./PokemonTypeChips";

export default function PokedexTable({
  pokemonArray,
}: {
  pokemonArray: Pokemon[];
}) {
  return (
    <Paper elevation={2} sx={{ mt: 3, p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Sprite</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Types</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonArray.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell align="center">#{pokemon.id}</TableCell>
              <TableCell align="center">
                <img
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  width={50}
                  height={50}
                  style={{ objectFit: "contain" }}
                />
              </TableCell>
              <TableCell align="center">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </TableCell>
              <TableCell align="center">
                <PokemonTypeChips types={pokemon.types} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
