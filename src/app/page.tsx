"use client";

import { Container, Typography, Box } from "@mui/material";

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Box display="flex" alignItems="center" sx={{ bgcolor: "#f5f5f5", p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Box sx={{ flex: "0 0 auto", mr: 3 }}>
          <img src="/pokedexicon.jpg" alt="Pokédex Icon" style={{ width: "150px", borderRadius: "8px" }} />
        </Box>
        <Box sx={{ flex: "1 1 auto", textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Pokédex!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This is your Pokémon index. Use the navigation to explore the app.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}