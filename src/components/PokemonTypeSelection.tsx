import { api } from "@/utils/api";
import { Button, Box, Paper, Typography } from "@mui/material";

export type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string) => void;
};

export function PokemonTypeSelection({
  selectedType,
  selectType,
}: PokemonTypeSelectionProps) {
  const { data: types = [] } = api.pokemon.getAllTypes.useQuery();

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
        Select a type
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        <Button
          key="All"
          variant={selectedType === "All" ? "contained" : "outlined"}
          onClick={() => selectType("All")}
          sx={{
            textTransform: "capitalize",
            borderColor: "#FF4433",
            color: selectedType === "All" ? "#fff" : "#FF4433",
            backgroundColor: selectedType === "All" ? "#FF4433" : "transparent",
            "&:hover": {
              backgroundColor: selectedType === "All" ? "#d32f2f" : "#FF4433",
              color: "#fff",
            },
          }}
        >
          All
        </Button>
        {types.map((type) => (
          <Button
            key={type}
            variant={selectedType === type ? "contained" : "outlined"}
            onClick={() => selectType(type)}
            sx={{
              textTransform: "capitalize",
              borderColor: "#FF4433",
              color: selectedType === type ? "#fff" : "#FF4433",
              backgroundColor: selectedType === type ? "#FF4433" : "transparent",
              "&:hover": {
                backgroundColor: selectedType === type ? "#d32f2f" : "#FF4433",
                color: "#fff",
              },
            }}
          >
            {type}
          </Button>
        ))}
      </Box>
    </Paper>
  );
}
