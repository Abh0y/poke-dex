"use client";

import { Container, Typography } from "@mui/material";
import { FilterablePokedexTable } from "@/components/FilterablePokedexTable";

export default function GetAllPage() {

  return (
    <Container maxWidth="md" style={{ marginTop: "24px" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Filterable Pokédex
      </Typography>
      <FilterablePokedexTable />
    </Container>
  );
}