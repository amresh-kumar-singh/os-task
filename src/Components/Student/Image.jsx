import { Box, Button } from "@mui/material";
const Image = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/avatar.jpg)",
        height: "220px",
        backgroundSize: "cover",
        backgroundRepeat: "round",
        position: "relative",
        width: "200px",
      }}
    >
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="student-image"
        multiple
        type="file"
      />
      <label htmlFor="student-image" id="student-image-label">
        <Button variant="raised" component="span">
          Upload
        </Button>
      </label>
    </Box>
  );
};

export default Image;
