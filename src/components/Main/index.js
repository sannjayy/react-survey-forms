import React from 'react'
import './Main.css';
import { IconButton } from '@mui/material';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
// import StorageIcon from '@mui/icons-material/Storage';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainCard from './Card';

export default function Main() {
    
	return (
		<div className="main-body">
			<div className="body-top">
				<div className="body-top-left" style={{fontSize: '16px', fontWeight: '500'}}>
					Echo Strokes Surveys
				</div>
				
				<div className="body-top-right">
					{/* <div className="body-top-right-center" style={{fontSize: '14px', marginRight: '125px'}}>
						Owned by anyone 
						<ArrowDropDownIcon />
					</div> */}
					<IconButton>
						<FolderOpenIcon style={{fontSize: '14px', color: 'black'}} />
					</IconButton>

				</div>
			</div>
			<div className="main-docs">
				<div className="main-docs-card">
					{/* <div className="main-docs-card-content">
						<h5>created 3 days ago</h5>
						<div className="doc-content" style={{fontSize: '12px', color: 'grey'}}>
							<div className="doc-content_left">
								<StorageIcon style={{color: 'white', backgroundColor: '#6E2594', padding: '3px', marginRight: '3px', borderRadius: '2px'}} />
							</div>
							<MoreVertIcon style={{fontSize: '16px', color: 'grey'}} />
						</div>
					</div> */}

				</div>
				<MainCard  />
			</div>
		</div>
	)
}
