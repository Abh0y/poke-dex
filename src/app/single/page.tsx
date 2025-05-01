"use client"
import { useState } from "react"
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
  Box,
} from "@mui/material"
import { api } from "@/utils/api"
import PokemonRow  from "@/components/PokemonRow"

export default function single() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState("")
  const {
    data: pokemon,
    isLoading,
    error,
  } = api.pokemon.getPokemon.useQuery(submitted, {
    enabled: !!submitted,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(name.trim())
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "24px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Pokédex Search
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Find your favorite Pokémon by name!
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <form onSubmit={handleSubmit}>
          <Box display="flex" alignItems="center" gap={2}>
            <TextField
              label="Enter Pokémon Name"
              size="small"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#FF4433",
                  },
                },
                "& label.Mui-focused": {
                  color: "#FF4433",
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
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </form>
        <Typography
          variant="caption"
          color="text.secondary"
          display="block"
          sx={{ mt: 1 }}
        >
          Write the complete name of the Pokémon (e.g., "Charmander").
        </Typography>
      </Paper>
      <Divider sx={{ mb: 3, bgcolor: "#FF4433" }} />
      {isLoading && <Typography align="center">Loading...</Typography>}
      {error && (
        <Typography color="error" align="center">
          {error.message}
        </Typography>
      )}
      {pokemon && (
        <PokemonRow pokemon={pokemon} showId nameCase="upper" imageSize={96} />
      )}
      {!pokemon && !error && !isLoading && (
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 2, fontStyle: "italic" }}
        >
          No Pokémon data to display. Try searching for a Pokémon!
        </Typography>
      )}
    </Container>
  )
}
