import { Box, Typography } from "@mui/material";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Coffee, Store } from "@mui/icons-material";


export function TransactionsTemp(props) {
    return (
        <Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent', color: 'white' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'black' }}>
                            {props.ListIcon}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.primaryText} secondary={<Typography fontSize='.8em' color='#70707C'>{props.date}</Typography>} />
                </ListItem>
            </List>
        </Box>
    );
}

export function TransactionsTab() {
    return (
        <Box>
            <TransactionsTemp primaryText='Apple Store' ListIcon={<Store />} date='July 20, 2014' />
            <TransactionsTemp primaryText='Starbucks Cafe' ListIcon={<Coffee />} date='July 20, 2014' />
            <TransactionsTemp primaryText='Pharmacy' ListIcon={<MedicalServicesIcon />} date='July 20, 2014' />
            <TransactionsTemp primaryText='Spar' ListIcon={<RestaurantIcon />} date='July 20, 2014' />
        </Box>
    )
}