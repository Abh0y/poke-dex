import { Chip, Stack } from "@mui/material";

const typeColorMap: Record<string, string> = {
  grass: "#4CAF50",
  poison: "#A040A0",
  fire: "#FF7043",
  water: "#42A5F5",
  bug: "#8BC34A",
  flying: "#81D4FA",
  normal: "#BDBDBD",
  electric: "#FFD600",
  ground: "#A1887F",
  fairy: "#F48FB1",
  fighting: "#D84315",
  psychic: "#F06292",
  rock: "#A1887F",
  steel: "#90A4AE",
  ice: "#4FC3F7",
  ghost: "#7E57C2",
  dragon: "#1976D2",
  dark: "#424242",
  // Add more as needed
};

export function PokemonTypeChips({ types }: { types: string[] }) {
  return (
    <Stack direction="row" spacing={1} justifyContent="center">
      {types.map((type) => (
        <Chip
          key={type}
          label={type.charAt(0).toUpperCase() + type.slice(1)}
          sx={{
            backgroundColor: typeColorMap[type.toLowerCase()] || "#E0E0E0",
            color: "#fff",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
          size="small"
        />
      ))}
    </Stack>
  );
}