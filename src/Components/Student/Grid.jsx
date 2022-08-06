import { Box, Typography } from "@mui/material";
const Grid = ({ label, data, type }) => {
  return (
    <Box display="flex" width="80%" justifyContent="space-between" mt="20px">
      <Typography fontWeight={600} textTransform="capitalize">
        {label}:
      </Typography>
      {!type ? (
        <Typography>{data}</Typography>
      ) : (
        <input type={type} defaultValue={data} />
      )}
    </Box>
  );
};
export default Grid;
