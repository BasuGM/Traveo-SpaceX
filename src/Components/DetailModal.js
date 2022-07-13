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
  Typography,
} from "@mui/material";

// Functional Imports
import { useSelector } from "react-redux";

// Local Components
import CapsuleItem from "../Components/CapsuleItem";

// Local Functions
import { allCapsules } from "../Redux/Actions/DataActions";
import { showDateInfo } from "../Utils/Services";

const initialValues = {
  capsule_serial: "",
  capsule_id: "",
  status: "",
  original_launch: "",
  original_launch_unix: 0,
  missions: [],
  landings: 0,
  type: "",
  details: null,
  reuse_count: 0,
};

const DetailModal = ({
  modalData = initialValues,
  visibility,
  setVisibility,
}) => {
  return (
    <Dialog open={visibility} onBackdropClick={() => setVisibility(false)}>
      <Card
        sx={{
          overflow: "scroll",
          minWidth: 450,
          background:
            modalData.status === "active"
              ? "linear-gradient(to right bottom, #66BFBF, #82ffa1)"
              : "linear-gradient(to right bottom, #F37878, #D61C4E)",
          borderRadius: "5px",
        }}
      >
        <CardContent sx={{ display: "flex" }}>
          <div>
            <Typography
              variant="h1"
              sx={{ fontSize: 32 }}
              color="text.secondary"
              gutterBottom
            >
              {modalData.capsule_serial}
            </Typography>

            <TitleValue
              title={"Launch Date:"}
              value={showDateInfo(modalData.original_launch)}
            />
            <TitleValue title={"Status:"} value={modalData.status} />
            <TitleValue title={"Capsule ID:"} value={modalData.capsule_id} />
            <TitleValue
              title={"Original Launch Unix:"}
              value={modalData.original_launch_unix}
            />
            <TitleValue title={"Landings:"} value={modalData.landings} />

            <TitleValue title={"Type:"} value={modalData.type} />
            <TitleValue title={"Details:"} value={modalData.details} />
            <TitleValue title={"Reuse Count:"} value={modalData.reuse_count} />
          </div>

          <div>
            <Typography
              sx={{ fontSize: 32 }}
              variant="h1"
              color="text.secondary"
              gutterBottom
            >
              Missions
            </Typography>

            {modalData.missions.map((item, index) => (
              <>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: "10px" }}
                  // color="text.secondary"
                  gutterBottom
                >
                  Mission {index + 1}
                </Typography>
                <TitleValue title={"Name of Mission:"} value={item.name} />
                <TitleValue title={"Flight:"} value={item.flight} />
              </>
            ))}

            {modalData.missions.length === 0 && (
              <Typography
                variant="body1"
                sx={{ marginLeft: "10px" }}
                // color="text.secondary"
                gutterBottom
              >
                No Missions
              </Typography>
            )}
          </div>
        </CardContent>
      </Card>
    </Dialog>
  );
};

const TitleValue = ({ title, value }) => {
  return (
    <Box
      sx={{
        minHeight: "60px",
        width: "180px",
        margin: "8px",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        borderRadius: "5px",
        padding: "4px",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h5">
        {value !== "" && value !== null ? value : "-"}
      </Typography>
    </Box>
  );
};

export default DetailModal;
