import React from "react";
import SearchBar from "./searchBar";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <Box sx={{ marginBottom:"80px", background:"black"}}>
        <AppBar
        sx={{ marginBottom:"80px", background:"#34437a"}}
        >
          <Toolbar className="barrainterior">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              AppWeather
            </Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
