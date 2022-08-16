import React, { useState, Fragment } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
// import  * as MuiDrawer  from '@mui/material/Drawer';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import PostAddIcon from '@mui/icons-material/PostAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { NavLink } from 'react-router-dom'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PollIcon from '@mui/icons-material/Poll';
import RedeemIcon from '@mui/icons-material/Redeem';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function DrawerComp() {
	const [state, setState] = useState({
		left: false,
	})
	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<ListItem>
					<ListItemText primary={`ECHO STROKES SURVEY`} />
				</ListItem>
				<Divider />
				<ListItem disablePadding>
					<ListItemButton component={NavLink} to="/">
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component={NavLink} to="/">
						<ListItemIcon>
							<PollIcon />
						</ListItemIcon>
						<ListItemText primary="Surveys" />
					</ListItemButton>
				</ListItem>
                <ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<PeopleOutlineIcon />
						</ListItemIcon>
						<ListItemText primary={`Users`} />
					</ListItemButton>
				</ListItem>                
			</List>
			<Divider />
			<List>

            <ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<FavoriteIcon />
						</ListItemIcon>
						<ListItemText primary={`Favorites`} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<RedeemIcon />
						</ListItemIcon>
						<ListItemText primary={`Stroke Redeems`} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<SupervisorAccountIcon />
						</ListItemIcon>
						<ListItemText primary={`Roles`} />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary={`Settings`} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	)
	return (
		<div>
			<Fragment>
				<IconButton onClick={toggleDrawer('left', true)}>
					<MenuIcon />
				</IconButton>
				<Drawer
					open={state['left']}
					onClose={toggleDrawer("left", false)}
					anchor={`left`}
				>
					{list('left')}
				</Drawer>
			</Fragment>
		</div>
	)
}
