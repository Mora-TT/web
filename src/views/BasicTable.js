import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(col1, col2, col3) {
  return { col1, col2, col3 };
}

const rows = [
  createData('UNDER 10', "UNDER 09", "UNDER 11, 13, and 15 NOVICES"),
  createData('UNDER 12', "UNDER 11", "UNDER 13, 15, 17, and 19 NOVICES"),
];

export default function BasicTable() {
  return (

    <Table style={{marginLeft: '2vw', marginRight: '2vw'}}>
      <TableHead>
        <TableRow>
          <TableCell><b>CHAMPION CATEGORY</b></TableCell>
          <TableCell><b>CANNOT PARTICIPATE</b></TableCell>
          <TableCell><b>ELIGIBLE TO PARTICIPATE</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.col1}>
            <TableCell style={{fontSize: '0.8em'}}>{row.col1}</TableCell>
            <TableCell style={{fontSize: '0.8em'}}>{row.col2}</TableCell>
            <TableCell style={{fontSize: '0.8em'}}>{row.col3}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>


  );
}