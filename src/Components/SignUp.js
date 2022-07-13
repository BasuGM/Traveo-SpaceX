// React Imports
import * as React from "react";

// MUI Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// MUI Utilities
import { Alert, Grid, Snackbar } from "@mui/material";
import { AddUser } from "../Redux/Actions/MainActions";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [open, setOpen] = React.useState(false);
  const [snackBarText, setSnackBarText] = React.useState(
    "Successfully Added the User! Now you can use these credentials to Login"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (
      data.get("fullname") !== "" &&
      data.get("email") !== "" &&
      data.get("password") !== ""
    ) {
      AddUser(data.get("fullname"), data.get("email"), data.get("password"));
      setOpen(true);
      setSnackBarText(
        "Successfully Added the User! Now you can use these credentials to Login"
      );
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    } else {
      setOpen(true);
      setSnackBarText(
        "Fill all the fields"
      );
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Snackbar open={open} message={snackBarText} />
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullname"
          label="Full Name"
          name="fullname"
          autoComplete="fullname"
          variant="standard"
          autoFocus
          // color="secondary"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          variant="standard"
          autoFocus
          // color="secondary"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          variant="standard"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
