import React from 'react'
import './Header.css'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import DrawerComp from '../Drawer';


export default function Header() {
	return (
		<div className="header">
			<div className='header_info'>
				
                <DrawerComp />
				<div className='info'>
					Echo Strokes
				</div>
			</div>
			<div className='header_search'>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<input type="text" name="search" placeholder="Search" />
			</div>
			<div className='header_right'>
				<IconButton>
					<AppsIcon />
				</IconButton>
			</div>
		</div>
	)
}
