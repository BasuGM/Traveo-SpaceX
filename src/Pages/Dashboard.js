// React Imports
import React, { useEffect, useState } from "react";

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
  Typography,
} from "@mui/material";

// Functional Imports
import { useSelector } from "react-redux";

// Local Components
import CapsuleItem from "../Components/CapsuleItem";

// Local Functions
import { allCapsules } from "../Redux/Actions/DataActions";
import { showDateInfo } from "../Utils/Services";
import DetailModal from "../Components/DetailModal";

function Dashboard() {
  const fetchData = useSelector((state) => state.FetchData);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    allCapsules();
  }, []);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {fetchData.allCapsules.map((item) => (
            <CapsuleItem
              item={item}
              modalControl={setShowModal}
              modalDataControl={setModalData}
            />
          ))}
        </List>
      </Container>

      <DetailModal modalData={modalData} visibility={showModal} setVisibility={setShowModal} />
    </>
  );
}

export default Dashboard;
