import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardComp({ title, desc, handleCreateForm }) {
	return (
		<Box sx={{ minWidth: 275, marginLeft: 1 }}>
			<Card variant="outlined">
				<React.Fragment>
					<CardContent>
						{/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							15th Aug, 2022
						</Typography> */}
						<Typography variant="h5" component="div">
							{title}
						</Typography>
						{/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
							adjective
						</Typography> */}
						<Typography variant="body2">
							{desc}
						</Typography>
					</CardContent>
					<CardActions>
                        {title === 'Blank' && <Button size="small" onClick={handleCreateForm}>Create Survey</Button>}
						
					</CardActions>
				</React.Fragment>	
			</Card>
		</Box>
	)
}
