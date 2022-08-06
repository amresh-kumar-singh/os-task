import {
  Box,
  Paper,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { useEffect } from "react";
import { SchoolData } from "../../context";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const {
    storage: { students },
    setStorage,
  } = SchoolData();
  const navigate = useNavigate();

  useEffect(() => {
    if (students.length === 0) {
      fetch(`${process.env.REACT_APP_BASE_URL}/student`)
        .then((response) => response.json())
        .then((data) => {
          setStorage((prev) => ({ ...prev, students: data }));
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Paper sx={{ minHeight: "100vh", marginTop: "25px" }}>
      <Typography variant="h5" gutterBottom>
        Student
      </Typography>
      <Box
        display="flex"
        width={{ xs: "100%", sm: "80%" }}
        justifyContent="space-around"
        alignItems="center"
        margin="auto"
        marginTop="10px"
        padding="10px"
      >
        <Typography sx={{ flex: "1" }}>SN</Typography>
        <Typography sx={{ flex: "1" }} fontWeight={600}>
          Student ID
        </Typography>
        <Typography sx={{ flex: "3" }} fontWeight={600}>
          Student Name
        </Typography>
        <Typography sx={{ flex: "3" }} fontWeight={600}>
          Student Email
        </Typography>
        <Typography sx={{ flex: "3" }} fontWeight={600}>
          Student DOB
        </Typography>
        <Typography sx={{ flex: "2" }} fontWeight={600}>
          Student Detail
        </Typography>
      </Box>
      {students.length === 0 ? (
        <CircularProgress />
      ) : (
        students.map((student, index) => (
          <Box
            display="flex"
            width={{ xs: "100%", sm: "80%" }}
            justifyContent="space-between"
            alignItems="center"
            margin="auto"
            key={student.id}
            border="1px solid grey"
            marginTop="10px"
            padding="10px"
            borderRadius="4px"
            className="student-data"
          >
            <Typography sx={{ flex: "1" }}>{index + 1}</Typography>
            <Typography sx={{ flex: "1" }}>{student.id}</Typography>
            <input
              type="text"
              style={{ flex: "3", textTransform: "capitalize" }}
              value={student.name}
              readOnly
            />
            <input
              type="email"
              style={{ flex: "3" }}
              value={student.email}
              readOnly
            />
            <input
              type="date"
              style={{ flex: "3" }}
              value={student.dob}
              readOnly
            />

            <Button
              sx={{ flex: 2 }}
              onClick={() => navigate(`/students/${student.id}`)}
            >
              {" "}
              Get Detail
            </Button>
          </Box>
        ))
      )}
    </Paper>
  );
};

export default Student;
