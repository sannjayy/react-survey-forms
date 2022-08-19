import React, { useContext, useState } from 'react'
// import { API_HOST_URL } from '../../config';
// import FormContext from '../../context/form/FormContext'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';



export default function FormSettings() {
	// const { questions, setQuestions } = useContext(FormContext);
	const [ quesPoint, setQuesPoint ] = useState(2);
	return (
		<div className="question-form">
			<br />
			<div className="section">
				
				<div className="question-title-section">
					<div className="question-form-top">
						<Typography>Settings</Typography>
						<Divider />
						<Box sx={{ flexGrow: 1, marginTop:3 }}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Typography>Default question point value:</Typography>
								</Grid>
								<Grid item xs={6}>
									<input type='number' 
										className='text_input'
										style={{width: '23%', borderBottom: '1px solid litegrey'}}
										value={quesPoint}
										onChange={(e) => setQuesPoint(e.target.value)}
									/>
								</Grid>
							</Grid>
						</Box>
					</div>
				</div>


			</div>
		</div>
	)
}
