// React Imports
import React, { useEffect, useState } from "react";

// MUI Components
import { Box, Container, List, Typography } from "@mui/material";

// Functional Imports
import { useSelector } from "react-redux";

// Local Components
import CapsuleItem from "../Components/CapsuleItem";

// Local Functions
import { allCapsules } from "../Redux/Actions/DataActions";
import { showDateInfo } from "../Utils/Services";
import DetailModal from "../Components/DetailModal";
import NavigationBar from "../Components/NavigationBar";
import moment from "moment";

function Dashboard() {
  const fetchData = useSelector((state) => state.FetchData);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [filter, setFilter] = useState("Select");
  const [filterArray, setFilterArray] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    allCapsules();
  }, []);

  let afterToday = [];
  let beforeToday = [];
  let dateRange = [];

  useEffect(() => {
    afterToday = fetchData.allCapsules.filter((item) =>
      moment(item.original_launch).isAfter(moment(new Date()))
    );

    beforeToday = fetchData.allCapsules.filter((item) =>
      moment(item.original_launch).isBefore(moment(new Date()))
    );

    dateRange = fetchData.allCapsules.filter(
      (item) =>
        moment(item.original_launch).isAfter(moment(startDate)) &&
        moment(item.original_launch).isBefore(moment(endDate))
    );

    if (filter === "After Today") {
      setFilterArray(afterToday);
    } else if (filter === "Before Today") {
      setFilterArray(beforeToday);
    } else if (filter === "Date Range") {
      setFilterArray(dateRange);
    }
  }, [filter, startDate, endDate]);

  return (
    <>
      <NavigationBar
        filter={filter}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setFilter={setFilter}
      />
      <Container component="main" sx={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              marginTop: "90px",
            }}
          >
            {filter === "Select"
              ? fetchData.allCapsules.map((item) => (
                  <CapsuleItem
                    item={item}
                    modalControl={setShowModal}
                    modalDataControl={setModalData}
                  />
                ))
              : filterArray.map((item) => (
                  <CapsuleItem
                    item={item}
                    modalControl={setShowModal}
                    modalDataControl={setModalData}
                  />
                ))}

            {filter !== "Select" && filterArray.length === 0 && (
              <Typography
                variant="h2"
                component="div"
                sx={{ flexGrow: 1, marginTop: "100px" }}
              >
                No Data Found
              </Typography>
            )}
          </List>
        </Box>
        <Box sx={{ flex: 2, border: "0px solid red" }}></Box>
      </Container>

      <DetailModal
        modalData={modalData}
        visibility={showModal}
        setVisibility={setShowModal}
      />
    </>
  );
}

export default Dashboard;
