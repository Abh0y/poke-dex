"use client";

import React from "react";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";

function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", margin: 0 }}>
        <nav style={{ background: "#FF4433", color: "#fff", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src="/Pokeball.svg" alt="Pokeball" style={{ width: 36, height: 36, marginRight: 12 }} />
            <div style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Pokédex</div>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Button
              href="/single"
              variant={pathname === "/single" ? "contained" : "text"}
              sx={{
                color: pathname === "/single" ? "#d32f2f" :"#fff",
                backgroundColor: pathname === "/single" ? "#fff" : "transparent",
                fontWeight: "bold",
                "&:hover":  pathname === "/single" ? "none" : { backgroundColor: "#b71c1c" }
              }}
            >
              Single
            </Button>
            <Button
              href="/multiple"
              variant={pathname === "/multiple" ? "contained" : "text"}
              sx={{
                color: pathname === "/multiple" ? "#d32f2f" :"#fff",
                backgroundColor: pathname === "/multiple" ? "#fff" : "transparent",
                fontWeight: "bold",
                "&:hover":  pathname === "/multiple" ? "none" : { backgroundColor: "#b71c1c" }
              }}
            >
              Multiple
            </Button>
            <Button
              href="/getall"
              variant={pathname === "/getall" ? "contained" : "text"}
              sx={{
                color: pathname === "/getall" ? "#d32f2f" :"#fff",
                backgroundColor: pathname === "/getall" ? "#fff" : "transparent",
                fontWeight: "bold",
                "&:hover":  pathname === "/getall" ? "none" : { backgroundColor: "#b71c1c" }
              }}
            >
              AllFiltered
            </Button>
          </div>
        </nav>
        {children}
        <footer style={{ background: "#eee", color: "#333", padding: "1rem", textAlign: "center" }}>
          &copy; {new Date().getFullYear()} Pokédex. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;