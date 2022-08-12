import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardComp({ handleCreateForm }) {
	return (
		<Box sx={{ minWidth: 275, marginLeft: 1 }}>
			<Card variant="outlined">
				<React.Fragment>
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							15th Aug, 2022
						</Typography>
						<Typography variant="h5" component="div">
							Blank
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							adjective
						</Typography>
						<Typography variant="body2">
							Create a new form
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" onClick={handleCreateForm}>Create Form</Button>
					</CardActions>
				</React.Fragment>	
			</Card>
		</Box>
	)
}