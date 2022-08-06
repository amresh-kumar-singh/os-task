import {
  Box,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import MuiltipleSelect from "../../Components/Course/MuiltipleSelect";
import { SchoolData } from "../../context";

const Course = () => {
  const {
    storage: { courses },
    setStorage,
  } = SchoolData();

  useEffect(() => {
    if (courses.length === 0) {
      fetch(`${process.env.REACT_APP_BASE_URL}/course`)
        .then((response) => response.json())
        .then((data) => {
          setStorage((prev) => ({ ...prev, courses: data }));
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Paper sx={{ minHeight: "100vh", marginTop: "25px" }}>
      <Typography variant="h5" gutterBottom>
        Courses We Provide
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
        <Typography sx={{ flex: "1" }} fontWeight={600}>
          SN
        </Typography>
        <Typography sx={{ flex: "1" }} fontWeight={600}>
          Course ID
        </Typography>
        <Typography sx={{ flex: "3" }} fontWeight={600}>
          Course Name
        </Typography>
        <Typography sx={{ flex: "4" }} fontWeight={600}>
          Staff Name
        </Typography>
      </Box>
      {courses.length === 0 ? (
        <CircularProgress />
      ) : (
        courses.map((course, index) => (
          <Box
            display="flex"
            width={{ xs: "100%", sm: "80%" }}
            justifyContent="space-around"
            alignItems="center"
            margin="auto"
            key={course.id}
            border="1px solid grey"
            marginTop="10px"
            padding="10px"
            borderRadius="4px"
          >
            <Typography sx={{ flex: "1" }}>{index + 1}</Typography>
            <Typography sx={{ flex: "1" }}>{course.id}</Typography>
            <TextField
              label="Course Name"
              value={
                typeof course.coursename === "string"
                  ? course.coursename
                  : Object.values(course.coursename).join("")
              }
              type="text"
              sx={{ flex: "3" }}
            />
            <MuiltipleSelect
              staffName={
                Array.isArray(course.staffName)
                  ? course.staffName
                  : [course.staffName]
              }
            />
          </Box>
        ))
      )}
    </Paper>
  );
};

export default Course;
