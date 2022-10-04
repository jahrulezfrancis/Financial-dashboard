import * as React from 'react';
import { Grid, Input, useMediaQuery } from '@mui/material';
import HeaderLogo from "../Images/Logo.png"
import { Link as NavLink } from 'react-router-dom';
import { Box } from '@mui/system';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DeleteIcon from '@mui/icons-material/Delete';
import GridViewIcon from '@mui/icons-material/GridView';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { InputAdornment } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Search } from '@mui/icons-material';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MdDashboard } from 'react-icons/md';



export default function Navigation() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    return (
        <Box display={onMobile ? 'none' : 'block'} zIndex='1' position='fixed' right='0' left='0' top='0' mb='10em'>
            <Grid sx={{ width: '100%', bgcolor: '#0F0F13', p: '1em', alignItems: 'center' }} >
                <Grid container gap={3} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Box>
                        <img src={HeaderLogo} alt='header-logo' />
                    </Box>
                    <Box>
                        <Input sx={{ bgcolor: '#000000', borderRadius: '1em', color: '#BBC4BB', paddingLeft: '1em', width: '20em', height: '2.5em' }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search sx={{ color: 'white' }} />
                                </InputAdornment>
                            }
                            placeholder='Search' type='search' />
                    </Box>
                    <Box>
                        <Grid container gap={4} alignItems='center'>
                            <NavLink>
                                <NotificationsActiveIcon />
                            </NavLink>
                            <NavLink>
                                <DeleteIcon />
                            </NavLink>
                            <NavLink>
                                <GridViewIcon />
                            </NavLink>
                            <NavLink>
                                <EqualizerIcon />
                            </NavLink>
                            <NavLink underline='none'>
                                <AccountMenu />

                            </NavLink>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}


export function MobileMenu() {
    const onMobile = useMediaQuery('(max-width: 1000px)')
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box display={onMobile ? 'block' : 'none'}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            bgcolor='#0B4850' width='100vh'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Grid container alignItems='center' justifyContent='space-between'>
                        <Box>
                            <img src={HeaderLogo} alt='Header logo' />
                        </Box>
                        <Box>

                            <Button onClick={toggleDrawer(anchor, true)}><MdDashboard fontSize='3em' /></Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </Box>
                    </Grid>
                </React.Fragment>
            ))}
        </div>
    );
}




export function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
