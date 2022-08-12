import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';


export default function Header() {
	return (
		<div className="header">
			<div className='header_info'>
				<IconButton>
					<MenuIcon />
				</IconButton>
			</div>
			<div className='header_search'>
				<SearchIcon />
				<input type="text" name="search" />
			</div>
			<div className='header_right'>
				<IconButton>
					<AppsIcon />
				</IconButton>
			</div>
		</div>
	)
}
