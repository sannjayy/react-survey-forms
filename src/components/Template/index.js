import React from 'react';
import './Template.css';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import CardComp from './Card';

export default function Template() {
	return (
		<div className="template">
			<div className="template-top">
				<div className="template-left">
					<span style={{ fontSize: '16px', color: '#202124' }}>Select form Templates</span>
				</div>
				<div className="template-right">
					<div className="gallery-button">
						Gallery
						<UnfoldMoreIcon />
					</div>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="template-body">
				<CardComp />
				<CardComp />
				<CardComp />
			</div>
		</div>
	)
}
