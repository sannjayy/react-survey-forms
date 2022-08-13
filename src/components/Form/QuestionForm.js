import React, { useState, useEffect } from 'react'
import './QuestionForm.css'
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
// import SelectAllIcon from '@mui/icons-material/SelectAll';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FormControlLabel, MenuItem, Select, Button, Switch  } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SubjectIcon from '@mui/icons-material/Subject';
import ShortTextIcon from '@mui/icons-material/ShortText';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NorthEastIcon from '@mui/icons-material/NorthEast';
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
				<div className='question_boxes'>
				<AccordionDetails className='add_question'>
					<div className='add_question_top'>
						<input type="text" className="question" placeholder="Question" value={question.questionText} />
						<CropOriginalIcon style={{color: '#5f6368'}} />
						<Select className='select' style={{ color: '#5f6368', fontSize: '13px'}}>
							<MenuItem id="text" value="Text">
                                <SubjectIcon style={{ marginRight: '10px'}} />
                                Paragraph 
                            </MenuItem>
							<MenuItem id="checkbox" value="Checkbox">
                                <CheckBoxIcon style={{ marginRight: '10px'}} />
                                Checkbox 
                            </MenuItem>
							<MenuItem id="radio" value="Radio"> 
                                <RadioButtonCheckedIcon style={{ marginRight: '10px'}} />
                                Multiple Choice 
                            </MenuItem>
						</Select>
					</div>
                    {question.options.map((option, j) => (
                        <div className="add_question_body" key={j}>
                            {
                                (question.questionType !== 'text') ?
                                <input type={question.questionType} style={{ marginRight: '10px' }} /> :
                                <ShortTextIcon style={{marginRight: '10px' }} />
                            }
                            <div>
                                <input type='text' className='text_input' placeholder='option' value={question.options[j].optionText} />
                            </div>
                            
                            <CropOriginalIcon />

                            <IconButton aria-label="delete">
                                <CloseIcon />
                            </IconButton>
                        </div>
                    ))}
                    { question.options.length < 5 ? (
                        <div className='add_question_body'>
                            <FormControlLabel disabled control={
                                (question.questionType !== 'text') ? 
                                <input type={question.questionType} color="primary" inputProps={{ 'aria-label': 'secondary checkbox'}} style={{marginLeft: '10px', marginRight: '10px' }} disabled /> :
                                <ShortTextIcon style={{marginRight: '10px' }} />
                            } label={
                                <div>
                                    <input type='text' className="text_input" style={{fontSize:'13px', width:'60px'}} placeholder="add other" />
                                    <Button siz e="small" style={{textTransform: 'none', color: "#4285f4", fontSize:'13px', fontWeight: '600'}}>Add Option</Button>
                                </div>
                            } />
                        </div>
                    ) : ''}
                    <div className="add_footer">
                        <div className="add_question_bottom_left">
                            <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                <NorthEastIcon />
                                Answer Key
                            </Button>
                        </div>
                        <div className="add_question_bottom">
                            <IconButton aria-label="copy">
                                <FilterNoneIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            <span>Required <Switch name="checkedA" color="primary" /></span>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
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
