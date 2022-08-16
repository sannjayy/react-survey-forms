import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material';
import {NavLink} from 'react-router-dom'
import Typography from '@mui/material/Typography';
// import SearchIcon from '@mui/icons-material/Search';
import DrawerComp from '../Drawer';
import PersonIcon from '@mui/icons-material/Person';
export default function Header() {
	return (
		<div className="header">
			<div className='header_info'>
				
                <DrawerComp />
                <NavLink to='/' style={({isActive}) => { return { color: isActive ? '#584848' : '#1976d2' }} }>
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
				<IconButton>
					<PersonIcon />
				</IconButton>
			</div>
		</div>
	)
}
