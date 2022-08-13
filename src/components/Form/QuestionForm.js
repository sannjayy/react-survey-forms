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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import TextFieldsIcon from '@mui/icons-material/TextFields';
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
    const handleChangeQuestion = (text, i) => {
        var newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion)
        console.log(newQuestion)
    }
    const handleCopyQuestion = (i) => {
        let question = [...questions];
        var newQuestion = question[i];
        setQuestions([...questions, newQuestion])
    }
    const handleDeleteQuestion = (i) => {
        let question = [...questions];
        if (questions.length > 1) { 
            question.splice(i, 1);
        }
        setQuestions(question);
    }
    const handleRequiredQuestion = (i) => {
        let reqQuestion = [...questions];
        reqQuestion[i].required = !reqQuestion[i].required
        console.log(`${reqQuestion[i].required} - ${i}`)
        setQuestions(reqQuestion);
    }
    const handleChangeOption = (text, i, j) => {
        // i question index & j option index
        const questionOption = [...questions];
        questionOption[i].options[j].optionText = text;
        setQuestions(questionOption)
        console.log(questionOption)
    }
    const handleRemoveOption = (i, j) => {
        // i question index & j option index
        const removeQuestionOption = [...questions];
        if (removeQuestionOption[i].options.length > 1) {
            removeQuestionOption[i].options.splice(j, 1)
        }
        setQuestions(removeQuestionOption)
        console.log(`${i} __ ${j}`)
    }
    const handleAddOption = (i) => {
        const optionOfQuestion = [...questions];
        if (optionOfQuestion[i].options.length < 5) {
            optionOfQuestion[i].options.push({optionText: `Option ${(optionOfQuestion[i].options.length + 1)}`})
        } else {
            console.log('max 5 options allowed');
        }
        setQuestions(optionOfQuestion)
    }
    const addQuestionType = (i, type) => {
        let question = [...questions];
        question[i].questionType = type;
        setQuestions(question)
        console.log(type)
    }
    const handleAddMoreQuestionField = () => {
        setQuestions([
            ...questions,
            {
                questionText: 'Question',
			    questionType: "radio",
                options: [
                    { optionText: 'Option 1'},
                ],
                open: true,
                required: false,
            }
        ]);
    }
    

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
					{!questions[i].open ? (

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
						<input type="text" className="question" placeholder="Question" onChange={(e) => handleChangeQuestion(e.target.value, i)} value={question.questionText} />
						<CropOriginalIcon style={{color: '#5f6368'}} />
						<Select className='select' style={{ color: '#5f6368', fontSize: '13px'}}>
							<MenuItem id="text" value="Text" onClick={() => addQuestionType(i, 'text')} key={`Text`}>
                                <SubjectIcon style={{ marginRight: '10px'}}  />
                                Paragraph 
                            </MenuItem>
							<MenuItem id="checkbox" value="Checkbox" onClick={() => addQuestionType(i, 'checkbox')} key={`Checkbox`}>
                                <CheckBoxIcon style={{ marginRight: '10px'}}  />
                                Checkbox 
                            </MenuItem>
							<MenuItem id="radio" value="Radio" onClick={() => addQuestionType(i, 'radio')} key={`Checkbox`}> 
                                <RadioButtonCheckedIcon style={{ marginRight: '10px'}}  />
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
                                <input type='text' className='text_input' placeholder='option' onChange={(e) => handleChangeOption(e.target.value, i, j)} value={question.options[j].optionText} />
                                {/* value={question.options[j].optionText} /> */}
                            </div>
                            
                            <CropOriginalIcon />

                            <IconButton aria-label="delete">
                                <CloseIcon onClick={() => handleRemoveOption(i,j)} />
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
                                    <Button size="small" style={{textTransform: 'none', color: "#4285f4", fontSize:'13px', fontWeight: '600'}} onClick={() => handleAddOption(i)}>Add Option</Button>
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
                            <IconButton aria-label="copy" onClick={() => handleCopyQuestion(i)}>
                                <FilterNoneIcon />
                            </IconButton>
                            <IconButton aria-label="delete" onClick={() => handleDeleteQuestion(i)}>
                                <DeleteIcon />
                            </IconButton>
                            <span>Required <Switch name="checkedA" color="primary" onClick={() => handleRequiredQuestion(i)} /></span>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </div>
				</AccordionDetails>
                    <div className="question_edit">
                        <IconButton onClick={handleAddMoreQuestionField} >
                            <AddCircleOutlineIcon className="edit" />
                        </IconButton>
                        
                        <OndemandVideoIcon className="edit" />
                        <CropOriginalIcon className="edit" />
                        <TextFieldsIcon className="edit" />
                    </div>
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
