import React from "react";
import { Container } from "@mui/system";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import NavbarMobile from "./Components/Navbar/NavbarMobile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { mainContainer } from "./Classes/classes";
const theme = createTheme({
  typography: {
    fontFamily: "Epilogue",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters sx={{ ...mainContainer }}>
        <Navbar />
        <NavbarMobile />
      </Container>
    </ThemeProvider>
  );
};
export default App;
