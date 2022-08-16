import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import DrawerComp from '../Drawer';
import PersonIcon from '@mui/icons-material/Person';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { StyledMenu } from '../Styled/StyledMenu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import PasswordIcon from '@mui/icons-material/Password';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="header">
            <div className='header_info'>

                <DrawerComp />
                <NavLink to='/' style={({ isActive }) => { return { color: isActive ? '#584848' : '#1976d2' } }}>
                    <Typography variant="h6" component="div">Echo Strokes</Typography>
                </NavLink>

            </div>
            {/* <div className='header_search'>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<input type="text" name="search" placeholder="Search" />
			</div> */}
            <div className='header_right'>
                <Stack direction="row" spacing={2}>
                    <IconButton 
                        id="user-menu-button"
                        aria-controls={open ? 'user-menus' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Avatar>ES</Avatar>
                    </IconButton>
                </Stack>
                <StyledMenu
                    id="user-menus"
                    MenuListProps={{
                        'aria-labelledby': 'user-menu-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <Typography variant="p" sx={{ mx: 1 }}>Echo User</Typography>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                        <PersonIcon />
                        My Account
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                        <PasswordIcon />
                        Change Password
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                        <LogoutIcon />
                        Logout
                    </MenuItem>
                </StyledMenu>
            </div>
        </div>
    )
}
