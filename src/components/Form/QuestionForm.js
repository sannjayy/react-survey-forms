import React, { useState, useEffect } from 'react'
import './QuestionForm.css'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FormControlLabel, MenuItem, Select } from '@mui/material';


export default function QuestionForm() {
	const [ questions, setQuestions ] = useState([
		{
			questionText: 'what is the capital of west bengal?',
			questionType: "radio",
			options: [
				{ optionText: 'Bangalore'},
				{ optionText: 'Kolkata'},
				{ optionText: 'Patna'},
				{ optionText: 'Gangtok'}
			],
			open: true,
			required: false,
		}
	])
	const questionsUI = () => {
		return questions.map((question, i) => (			
			<div>
			<Accordion expanded={question.open} className={questions[i].open ? 'add_border'  : ''}>
				<AccordionSummary
					aria-controls="panel1a-content"
					id="panel1a-header"
					elevation={1}
					style={{ width: '100%'}}
				>
					{questions[i].open ? (

						<div className="saved_question">
							
							<Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>
								{i + 1}. {questions[i].questionText}
							</Typography>

							{ question.options.map(( option, j) => (
								
								<div key={j}>
									<div style={{display:'flex'}}>
										<FormControlLabel style={{ marginLeft: '5px', marginBottom: '5px'}} disabled control={ <input type={question.questionType} color="primary" style={{marginRight: '3px'}} required={question.required} />} 
										label={
											<Typography style={{ fontSize: '13px', fontWeight: '400', letterSpacing: '.2px', lineHeight: '20px', color: '#202124' }}>
												{question.options[j].optionText}
											</Typography>
										}
										/>
									</div>
								</div>
								
							))}
						</div>
					) : ''}					
				</AccordionSummary>
				<div className='question-boxes'>
				<AccordionDetails className='add_question'>
					<div className='add-question-top'>
						<input type="text" className="question" placeholder="Question" value={question.questionText} />
						<CropOriginalIcon style={{color: '#5f6368'}} />
						<Select className='select' style={{ color: '#5f6368', fontSize: '13px'}}>
							<MenuItem id="text" value="Text"> Paragraph </MenuItem>
							<MenuItem id="checkbox" value="Checkbox"> Checkbox </MenuItem>
							<MenuItem id="radio" value="Radio"> Multiple Choice </MenuItem>
						</Select>
					</div>
				</AccordionDetails>
				</div>
			</Accordion>
			</div>
			
		))
	}
	return (
		<div>
			<div className="question-form">
				<br />
				<div className="section">
					<div className="question-title-section">
						<div className="question-form-top">
							<input type="text" className="question-from-top-name" style={{color: 'blank'}} placeholder="Untitled document" />
							<input type="text" className="question-from-top-desc" style={{color: 'blank'}} placeholder="Form Description" />
						</div>
					</div>
					{questionsUI()}
				</div>
			</div>

		</div>
	)
}
