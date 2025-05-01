import { useState } from "react";
import { PokemonTypeSelection } from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";
import { api } from "@/utils/api";
import { Container, Typography, Box, Divider, Button } from "@mui/material";

export function FilterablePokedexTable() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [page, setPage] = useState(0);
  const limit = 5;

  const { data, error, isLoading } = selectedType === "All"
    ? api.pokemon.getAllPokemon.useQuery({ limit, skip: page * limit })
    : api.pokemon.getPokemonByType.useQuery({ type: selectedType, limit, skip: page * limit }, {
        enabled: !!selectedType,
      });

  const filteredPokemon = data?.pokemons || [];
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / limit);

  if (error) {
    console.error("Error fetching Pokémon:", error);
  }

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(0, page - 2);
    const endPage = Math.min(totalPages - 1, page + 2);

    if (startPage > 0) {
      pages.push(0);
      if (startPage > 1) pages.push("...");
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) {
      if (endPage < totalPages - 2) pages.push("...");
      pages.push(totalPages - 1);
    }

    return pages;
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        Filter Pokémon by Type
      </Typography>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={(type) => {
          setSelectedType(type);
          setPage(0); // Reset page to 0 when type changes
        }}
      />
      <Divider sx={{ mb: 3, bgcolor: "#FF4433" }} />
      {isLoading && (
        <Typography align="center" color="text.secondary" sx={{ mt: 2 }}>
          Loading...
        </Typography>
      )}
      {filteredPokemon.length > 0 && !isLoading && (
        <Box mt={4}>
          <PokedexTable pokemonArray={filteredPokemon} />
          <Box display="flex" justifyContent="center" mt={2}>
            <Button
              size="small"
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
              disabled={page === 0}
              sx={{ mx: 1 }}
            >
              Previous
            </Button>
            {getPageNumbers().map((pageNumber, index) =>
              typeof pageNumber === "number" ? (
                <Button
                  size="small"
                  key={index}
                  onClick={() => setPage(pageNumber)}
                  variant={page === pageNumber ? "contained" : "outlined"}
                  sx={{ mx: 0.5 }}
                >
                  {pageNumber + 1}
                </Button>
              ) : (
                <Typography key={index} sx={{ mx: 0.5 }}>
                  {pageNumber}
                </Typography>
              )
            )}
            <Button
              size="small"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={(page + 1) * limit >= totalCount}
              sx={{ mx: 1 }}
            >
              Next
            </Button>
            <Typography sx={{ ml: 2 }}>
              Total Pages: {totalPages}
            </Typography>
          </Box>
        </Box>
      )}
      {filteredPokemon.length === 0 && !error && !isLoading && (
        <Typography
          align="center"
          color="text.secondary"
          sx={{ mt: 2, fontStyle: "italic" }}
        >
          No Pokémon data to display. Try searching for a different type!
        </Typography>
      )}
    </Container>
  );
}
