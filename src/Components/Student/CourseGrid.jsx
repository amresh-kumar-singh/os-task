import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SchoolData } from "../../context";
import objToStr from "../../utils/objToStr";
const arrToString = (arr) => {
  return Array.isArray(arr)
    ? arr.map((item) => item[0].toUpperCase() + item.substring(1)).join(", ")
    : "" + arr;
};

const CourseGrid = ({ courseName, staff }) => {
  const {
    storage: { courses },
  } = SchoolData();

  const [staffname, setStaffname] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    setStaffname(arrToString(staff));
    setCourse(courseName);
    // eslint-disable-next-line
  }, [courseName]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCourse(value);
    let temp = courses
      .filter(
        (item) =>
          item.coursename === value ||
          Object.values(item.coursename).join("") === value
      )
      //
      .map((item) =>
        Array.isArray(item.staffName)
          ? arrToString(item.staffName)
          : [item.staffName]
      )
      .join(", ");
    setStaffname(temp);
  };

  return (
    <Box display="flex" width="100%" justifyContent="space-between" mt="20px">
      <Box
        display="flex"
        justifyContent="space-between"
        width="45%"
        alignItems="center"
      >
        <Typography fontWeight={600}>Courses:</Typography>
        <FormControl>
          <Select
            value={course}
            // label="Age"
            onChange={handleChange}
          >
            {courses?.map((course) => (
              <MenuItem value={objToStr(course.coursename)} key={course.id}>
                {objToStr(course.coursename)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        width="45%"
        alignItems="center"
      >
        <Typography fontWeight={600}>Staff:</Typography>
        <input
          value={staffname}
          style={{ height: "40px", width: "70%" }}
          readOnly
        />
      </Box>
    </Box>
  );
};
export default CourseGrid;
