import { Box, Typography } from "@mui/material";
import { PokemonTypeChips } from "./PokemonTypeChips";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

interface PokemonRowProps {
  pokemon: Pokemon;
  showId?: boolean; // Show the ID before the name
  nameCase?: "upper" | "capitalize" | "none"; // Name casing
  imageSize?: number; // Size of the sprite
  compact?: boolean; // Compact mode for table row
}

export default function PokemonRow({
  pokemon,
  showId = true,
  nameCase = "capitalize",
  imageSize = 96,
  compact = false,
}: PokemonRowProps) {
  // Format name
  let displayName = pokemon.name;
  if (nameCase === "upper") displayName = displayName.toUpperCase();
  else if (nameCase === "capitalize") displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1);

  // Layout for compact (table) or full (single) view
  if (compact) {
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <img
          src={pokemon.sprite}
          alt={pokemon.name}
          style={{ width: imageSize, height: imageSize }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {showId ? `#${pokemon.id} ` : ""}
            {displayName}
          </Typography>
          <PokemonTypeChips types={pokemon.types} />
        </Box>
      </Box>
    );
  }

  return (
    <Box display="flex" alignItems="center" gap={2} my={2}>
      <img
        src={pokemon.sprite}
        alt={pokemon.name}
        style={{ width: imageSize, height: imageSize }}
      />
      <Box>
        <Typography variant="h6">
          {showId ? `#${pokemon.id} ` : ""}
          {displayName}
        </Typography>
        <PokemonTypeChips types={pokemon.types} />
      </Box>
    </Box>
  );
}
