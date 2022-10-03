import { Box, Grid, Button, ListItemIcon, Typography, Stack, useMediaQuery, Divider, } from "@mui/material";
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { ArrowLeft, ArrowRight, Coffee, Store } from "@mui/icons-material";
import MasterCard from "../Images/master-card.png"
import Visa1 from "../Images/visa-red.png"
import Visa2 from "../Images/visa-blue.png"
import Visa3 from "../Images/visa-ash.png"


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

export function CardsTemp(props) {
    return (
        <Box>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent', color: 'white' }}>
                <ListItem>
                    <ListItemIcon>
                        <img src={props.ListIcon} alt='' />
                    </ListItemIcon>
                    <ListItemText primary={props.primaryText} secondary={<Typography fontSize='.8em' color='#70707C'>{props.cardType}</Typography>} />
                </ListItem>
            </List>
        </Box>
    );
}

const PriceText = (props) => {
    return (
        <Grid alignItems='' p='1em'>
            <Typography fontSize='2em' fontWeight='bold' color='white'>
                {props.priceCount}
            </Typography>
        </Grid>
    )
}

const LeftRightButton = () => {
    return (
        <Grid>
            <Button startIcon={<ArrowLeft />} sx={{ color: 'white' }} />
            <Button endIcon={<ArrowRight />} sx={{ color: 'white' }} />
        </Grid>
    )
}

export function TransactionsTab() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    return (
        <Stack width={onMobile ? '100vw' : '35rem'} spacing='-1em' flexWrap='wrap' overflow='auto'>
            <Grid container justifyContent='space-between' alignContent='center' pt='2em'>
                <Typography pl='1em' variant='h5' color='white'>Last transaction</Typography>
                <LeftRightButton />
            </Grid>
            <Grid container justifyContent={onMobile ? 'center' : 'space-between'} alignContent={onMobile ? 'start' : 'center'} flex={1} flexDirection={onMobile ? 'column' : 'row'}>
                <TransactionsTemp primaryText='Apple Store' ListIcon={<Store />} date='July 20, 2014' />
                <CardsTemp primaryText='*4300' ListIcon={Visa1} cardType='Credit Card' />
                <PriceText priceCount='-$13,500' />
            </Grid>
                <Divider sx={{ color: 'red' }} light />
            <Grid container justifyContent={onMobile ? 'center' : 'space-between'} alignContent={onMobile ? 'start' : 'center'} flexDirection={onMobile ? 'column' : 'row'}>
                <TransactionsTemp primaryText='Starbucks Cafe' ListIcon={<Coffee />} date='July 20, 2014' />
                <CardsTemp primaryText='Spar' ListIcon={Visa2} cardType='Credit Card' />
                <PriceText priceCount='-$1,650' />
            </Grid>
            <Grid container justifyContent={onMobile ? 'center' : 'space-between'} alignContent={onMobile ? 'start' : 'center'} flexDirection={onMobile ? 'column' : 'row'}>
                <TransactionsTemp primaryText='Pharmacy' ListIcon={<MedicalServicesIcon />} date='July 20, 2014' />
                <CardsTemp primaryText='Spar' ListIcon={MasterCard} cardType='Credit Card' />
                <PriceText priceCount='-$5,800' />
            </Grid>
            <Grid container justifyContent={onMobile ? 'center' : 'space-between'} alignContent={onMobile ? 'start' : 'center'} flexDirection={onMobile ? 'column' : 'row'}>
                <TransactionsTemp primaryText='Spar' ListIcon={<RestaurantIcon />} date='July 20, 2014' />
                <CardsTemp primaryText='Spar' ListIcon={Visa3} cardType='Credit Card' />
                <PriceText priceCount='-$1,800' />
            </Grid>
        </Stack>
    )
}