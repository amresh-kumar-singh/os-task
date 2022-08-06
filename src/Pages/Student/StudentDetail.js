import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseGrid from "../../Components/Student/CourseGrid";
import Grid from "../../Components/Student/Grid";
import Image from "../../Components/Student/Image";
import { SchoolData } from "../../context";

const StudentDetail = () => {
  const {
    storage: { students },
  } = SchoolData();
  const { id } = useParams();
  const [studentData, setStudentData] = useState({});
  const [err, setErr] = useState(false);

  useEffect(() => {
    let temp = students.filter((item) => item.id === id)[0];
    if (temp?.id) {
      setStudentData(temp);
    } else {
      setErr(true);
    }
    // eslint-disable-next-line
  }, []);
  if (err) {
    return <Typography variant="h4">NO Student with ID: {id}</Typography>;
  }
  return (
    <Box width={{ xs: "100%", sm: "85%" }} margin="auto">
      <Typography variant="h5" textTransform="capitalize">
        {studentData.name}
      </Typography>
      <Box width="100%" display="flex">
        <Image />
        <Box
          width="70%"
          display="flex"
          alignItems="end"
          flexDirection="column"
          justifyContent="center"
        >
          <Grid label="id" data={studentData.id} />
          <Grid label="name" data={studentData.name} type="text" />
          <Grid label="email" data={studentData.email} type="email" />
        </Box>
      </Box>
      <Typography
        variant="h6"
        fontWeight="600"
        sx={{ margin: "30px 0 10px", textAlign: "left" }}
      >
        Course Details:
      </Typography>
      <Box width="100%" display="flex" justifyContent="space-around">
        <CourseGrid
          courseName={studentData.coursename}
          staff={studentData.staff}
        />
      </Box>
      <Typography
        variant="h6"
        fontWeight="600"
        sx={{ margin: "30px 0 10px", textAlign: "left" }}
      >
        Personal Details:
      </Typography>
      <Box width="100%" display="flex" justifyContent="space-around">
        <Box flexDirection="column" width="50%">
          <Grid label="Mother Name" data={studentData.mothername} type="text" />
          <Grid label="Father Name" data={studentData.fathername} type="text" />
          <Grid label="Blood Group" data={studentData.bloodgroup} type="text" />
        </Box>
        <Box flexDirection="column" width="50%">
          <Grid label="DOB" data={studentData.dob} type="date" />
          <Grid label="address" data={studentData.address} type="text" />
          <Grid label="created At" data={studentData.createdAt} />
        </Box>
      </Box>
    </Box>
  );
};
export default StudentDetail;
