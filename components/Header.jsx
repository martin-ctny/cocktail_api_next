import { Box, Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleNavigateHome = () => {
    router.push("/");
  };
  const handleNavigateAll = () => {
    router.push("/cocktails");
  };

  const handleNavigateSearch = (e) => {
    e.preventDefault();
    router.push(`/cocktails/search/${search}`);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="header">
      <Box
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          backgroundColor: "blue",
        }}
        className="header__logo-box"
      >
        <img
          src="https://previews.123rf.com/images/dstarky/dstarky1701/dstarky170100422/69262793-ic%C3%B4ne-ou-logo-de-cocktail-en-style-ligne-moderne-pictogramme-noir-de-haute-qualit%C3%A9-pour-la.jpg"
          alt="Logo"
          style={{ width: "100px", cursor: "pointer" }}
          onClick={handleNavigateHome}
        />

        <Typography onClick={handleNavigateHome} style={{ cursor: "pointer" }}>
          Home
        </Typography>
        <Typography onClick={handleNavigateAll} style={{ cursor: "pointer" }}>
          Cocktails
        </Typography>
        <form onSubmit={handleNavigateSearch} action="submit">
          <TextField
            onChange={handleChange}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
          <Button
            onClick={handleNavigateSearch}
            variant="outlined"
            href="#outlined-buttons"
          >
            Rechercher
          </Button>
        </form>
      </Box>
    </header>
  );
};

export default Header;
