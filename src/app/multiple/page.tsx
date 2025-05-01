"use client"
import { useState } from "react";
import { api } from "@/utils/api";
import { Container, Paper, TextField, Button, Typography, Divider, Box } from "@mui/material";

import PokedexTable  from "@/components/PokedexTable";

export default function PokedexPage() {
  const [names, setNames] = useState("");
  const [nameList, setNameList] = useState<string[]>([]);
  const { data: pokemonArray = [], isLoading, error } = api.pokemon.getPokemonArray.useQuery(nameList, {
    enabled: nameList.length > 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const list = names.split(",").map((n) => n.trim()).filter(Boolean);
    setNameList(list);
  };

  return (
    <Container maxWidth="md" style={{marginTop: "24px"}}>
      <Typography variant="h3" align="center" gutterBottom>
        Pokédex Multi-Search
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
        Enter multiple Pokémon names to fetch their details!
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <form onSubmit={handleSubmit}>
          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              label="Enter Pokémon names (comma separated)"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              placeholder="Bulbasaur, Charmander"
              fullWidth
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#FF4433',
                  },
                },
                '& label.Mui-focused': {
                  color: '#FF4433',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#FF4433",
                color: "#fff",
                '&:hover': {
                  backgroundColor: "#d32f2f"
                }
              }}
            >
              Fetch Pokémon
            </Button>
          </Box>
        </form>
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1 }}>
          Example: Bulbasaur, Charmander, Pikachu
        </Typography>
      </Paper>
      <Divider sx={{ mb: 3, bgcolor: "#FF4433" }} />
      {isLoading && <Typography align="center">Loading...</Typography>}
      {error && <Typography color="error" align="center">{error.message}</Typography>}
      {pokemonArray.length > 0 && <PokedexTable pokemonArray={pokemonArray} />}
      {nameList.length > 0 && !isLoading && pokemonArray.length === 0 && !error && (
        <Typography align="center" color="text.secondary" sx={{ mt: 2, fontStyle: "italic" }}>
          No Pokémon found for the given names.
        </Typography>
      )}
      {nameList.length === 0 && !error && !isLoading && (
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 2, fontStyle: "italic" }}
        >
          No Pokémon data to display. Try searching for a Pokémon!
        </Typography>
      )}
    </Container>
  );
}