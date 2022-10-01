import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid, Input, useMediaQuery } from '@mui/material';
import HeaderLogo from "../Images/Logo.png"
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    return (
        <Grid sx={{ width: '100%', bgcolor: '#0F0F13' }} >
            <List>
                <Grid container sx={{ display: 'flex', flexDirection: onMobile ? 'row' : 'column' }}>
                    <ListItem disablePadding sx={{}}>
                        <ListItemButton>
                            <img src={HeaderLogo} alt='header-logo' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <Input sx={{ bgcolor: '#000000', borderRadius: '1em', color: '#BBC4BB', paddingLeft: '1em', height: '2.5em' }} placeholder='Search' type='search' />
                    </ListItem>
                    <ListItem disablePadding sx={{ color: '#ffffff' }}>
                        <NavLink>
                            Naso
                        </NavLink>
                    </ListItem>
                    <ListItem sx={{ color: '#ffffff' }} disablePadding color='white'>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem sx={{ color: '#ffffff' }} disablePadding>
                        <ListItemText primary="About" />
                    </ListItem>
                </Grid>
            </List>
        </Grid>
    );
}
