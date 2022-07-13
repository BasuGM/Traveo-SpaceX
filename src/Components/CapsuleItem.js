// React Imports
import React, { useEffect } from "react";

// MUI Components
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Dialog,
  List,
  Modal,
  Typography,
} from "@mui/material";

// Functional Imports
import { useSelector } from "react-redux";

// Local Functions
import { allCapsules } from "../Redux/Actions/DataActions";
import { showDateInfo } from "../Utils/Services";

const CapsuleItem = ({ item, modalControl, modalDataControl }) => {
  const handleClick = () => {
    modalControl(true);
    modalDataControl(item);
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        margin: "10px",
        background:
          item.status === "active"
            ? "linear-gradient(to right bottom, #66BFBF, #82ffa1)"
            : "linear-gradient(to right bottom, #F37878, #D61C4E)",
        borderRadius: "5px",
      }}
    >
      <CardContent>
        <Typography
          variant="h1"
          sx={{ fontSize: 32 }}
          color="text.secondary"
          gutterBottom
        >
          {item.capsule_serial}
        </Typography>
        <Typography variant="body1">Launch Date:</Typography>
        <Typography variant="h4">
          {showDateInfo(item.original_launch)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: "#FFF" }} onClick={handleClick} size="small">
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default CapsuleItem;
