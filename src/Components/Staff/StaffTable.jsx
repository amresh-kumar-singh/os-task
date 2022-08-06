import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";

export default function StaffTable({ rows }) {
  const handleChange = () => {};
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>SN</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Mobile No.</TableCell>
            <TableCell align="center">DOB</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length === 0 ? (
            <LinearProgress />
          ) : (
            rows
              .filter((item) => item.name)
              .map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}.
                  </TableCell>
                  <TableCell align="center">{row.id} </TableCell>
                  <TableCell align="center">
                    <input
                      type="text"
                      value={row.name}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="email"
                      value={row.email}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="tel"
                      value={row.mobile}
                      onChange={handleChange}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <input
                      type="date"
                      value={row.dob}
                      onChange={handleChange}
                    />
                  </TableCell>
                </TableRow>
              ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
