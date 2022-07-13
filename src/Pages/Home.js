// React Imports
import * as React from "react";

// MUI Components
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// MUI Utilities
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Box, Grid, Snackbar } from "@mui/material";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

const theme = createTheme();

export default function Home() {
  const [signIn, setSignIn] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{
          marginTop: "120px",
          display: "flex",
        }}
        // maxWidth="xs"
      >
        <CssBaseline />
        <Grid sx={{ flex: 1 }} container justifyContent="center">
          {signIn ? <SignIn /> : <SignUp />}
          <Button
            type="submit"
            fullWidth
            variant="text"
            sx={{ width: "100px" }}
            color="success"
            onClick={() => setSignIn(!signIn)}
          >
            Trying to {signIn ? "Sign Up?" : "Sign In?"}
          </Button>
        </Grid>
        <Grid sx={{ flex: 2, border: "0px solid red" }}></Grid>
        <Box
          component="img"
          sx={{
            position: "fixed",
            right: "-60px",
            bottom: "-500px",
            zIndex: 100,
            height: window.innerHeight * 2.5,
          }}
          alt="The house from the offer."
          resizeMode="cover"
          src="https://i0.wp.com/wallpapersfortech.com/wp-content/uploads/2021/03/SpaceX-Mars-Logo.jpg"
        />
      </Container>
    </ThemeProvider>
  );
}
