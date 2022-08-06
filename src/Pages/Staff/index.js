import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import StaffTable from "../../Components/Staff/StaffTable";
import { SchoolData } from "../../context";

const Staff = () => {
  const {
    storage: { staff },
    setStorage,
  } = SchoolData();

  useEffect(() => {
    if (staff.length === 0) {
      fetch(`${process.env.REACT_APP_BASE_URL}/Staff`)
        .then((response) => response.json())
        .then((data) => {
          setStorage((prev) => ({ ...prev, staff: data }));
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Box minHeight="100vh" width={{ xs: "100%", sm: "85%" }} margin="auto">
      <Typography variant="h5" gutterBottom mt={2}>
        Our Staff
      </Typography>
      <StaffTable rows={staff} />
    </Box>
  );
};

export default Staff;
