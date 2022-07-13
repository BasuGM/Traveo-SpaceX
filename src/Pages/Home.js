// React Imports
import * as React from "react";

// MUI Components
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// MUI Utilities
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Alert, Grid, Snackbar } from "@mui/material";
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
        }}
        maxWidth="xs"
      >
        <CssBaseline />
        <Grid container justifyContent="center">
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
      </Container>
    </ThemeProvider>
  );
}
