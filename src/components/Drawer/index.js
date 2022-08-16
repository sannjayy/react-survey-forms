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
import HomeIcon from '@mui/icons-material/Home';

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
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItemButton>
				</ListItem>
			</List>
			<Divider />
			<List>
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
