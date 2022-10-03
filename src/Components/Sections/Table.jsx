import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TransactionsTemp } from './Transactions';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Coffee, Store } from "@mui/icons-material";

function createData(name) {
    return { name };
}

const rows = [
    createData(<TransactionsTemp primaryText='Apple Store' ListIcon={< Store />} date='July 20, 2014' />),
    createData(<TransactionsTemp primaryText='Starbucks Cafe' ListIcon={<Coffee />} date='July 20, 2014' />),
    createData(<TransactionsTemp primaryText='Pharmacy' ListIcon={<MedicalServicesIcon />} date='July 20, 2014' />),
    createData(<TransactionsTemp primaryText='Spar' ListIcon={<RestaurantIcon />} date='July 20, 2014' />),
];

export default function TransactionTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, bgcolor: '#0F0F13' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{<TransactionsTemp primaryText='Apple Store' ListIcon={<Store />} date='July 20, 2014' />}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
