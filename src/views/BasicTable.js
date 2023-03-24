import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(col1, col2, col3) {
  return { col1, col2, col3 };
}

const rows = [
  createData('UNDER 10', "UNDER 09", "UNDER 11, 13, and 15 NOVICES"),
  createData('UNDER 12', "UNDER 11", "UNDER 13, 15, 17, and 19 NOVICES"),
];

export default function BasicTable() {
  return (

      <Table sx={{marginLeft: '5vw', marginRight: '5vw', fontColor: 'white'}}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: 'white', fontWeight: 600}}><b>CHAMPION CATEGORY</b></TableCell>
            <TableCell sx={{color: 'white', fontWeight: 600}}><b>CANNOT PARTICIPATE</b></TableCell>
            <TableCell sx={{color: 'white', fontWeight: 600}}><b>ELIGIBLE TO PARTICIPATE</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.col1}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{color: 'white', fontWeight: 600}}>{row.col1}</TableCell>
              <TableCell sx={{color: 'white', fontWeight: 600}}>{row.col2}</TableCell>
              <TableCell sx={{color: 'white', fontWeight: 600}}>{row.col3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

  );
}