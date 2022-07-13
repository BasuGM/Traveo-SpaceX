// React Imports
import * as React from "react";

// MUI Components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// MUI Utilities
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";

const SignIn = () => {
  const [open, setOpen] = React.useState(false);
  const [snackBarText, setSnackBarText] = React.useState("Login Successful!");
  const userArray = useSelector((state) => state.MainData.userArray);
  const navigate = useNavigate();
  let loginSuccess = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    userArray.map((item) => {
      if (
        item.email === data.get("email") &&
        item.password === data.get("password")
      ) {
        loginSuccess = true;
      }
    });

    if (loginSuccess) {
      setOpen(true);
      setSnackBarText("Login Successful!");
      setTimeout(() => {
        setOpen(false);
        navigate("/Dashboard");
      }, 1000);
    } else {
      setOpen(true);
      setSnackBarText("Invalid Credentials!");
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
        Sign in
      </Typography>
      <Snackbar open={open} message={snackBarText} />
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default SignIn;
