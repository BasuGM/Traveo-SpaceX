import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem, Select, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useNavigate } from "react-router-dom";
import { UserLogout } from "../Redux/Actions/MainActions";

const NavigationBar = ({
  filter,
  setFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e);
  };

  const handleEndDate = (e) => {
    setEndDate(e);
  };

  const handleLogout = () => {
    navigate('/')
    UserLogout()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{ height: "100px", justifyContent: "center" }}
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          {filter === "Date Range" && (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Start Date"
                inputFormat="MM/dd/yyyy"
                value={startDate}
                sx={{ color: "white" }}
                onChange={handleStartDate}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      margin: "5px",
                      input: { color: "white" },
                      label: { color: "white" },
                      border: "1px solid grey",
                      borderRadius: 1,
                      color: "white",
                    }}
                    style={{ color: "white" }}
                    {...params}
                  />
                )}
              />
              <DesktopDatePicker
                label="End Date"
                inputFormat="MM/dd/yyyy"
                value={endDate}
                onChange={handleEndDate}
                renderInput={(params) => (
                  <TextField
                    sx={{
                      margin: "5px",
                      input: { color: "white" },
                      label: { color: "white" },
                      border: "1px solid grey",
                      borderRadius: 1,
                      color: "white",
                    }}
                    style={{ color: "white" }}
                    {...params}
                  />
                )}
              />
            </LocalizationProvider>
          )}

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Age"
            sx={{ color: "white" }}
            onChange={handleChange}
          >
            <MenuItem value={"Select"}>Select</MenuItem>
            <MenuItem value={"After Today"}>After Today</MenuItem>
            <MenuItem value={"Before Today"}>Before Today</MenuItem>
            <MenuItem value={"Date Range"}>Date Range</MenuItem>
          </Select>

          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
