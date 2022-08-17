// import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { Button } from '@mui/material';
import ShortTextIcon from '@mui/icons-material/ShortText';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default function SimpleOptions({ question, i, handleChangeOption, handleRemoveOption, handleAddOption }) {
	const [optionText, setOptionText] = useState('')

	return (
		<div>
			{/* Showing the options fields */}
			{question.options.map((option, j) => (
				<div className="add_question_body" key={j}>
					{(question.questionType !== 'TEXT' && question.questionType !== 'DROPDOWN') ?
						<input type={question.questionType} style={{ marginRight: '10px' }} />
						:
						<ShortTextIcon style={{ marginRight: '10px' }} />
					}
					<div>
						<input 
							type='text' 
							className='text_input' 
							placeholder='option' 
							onChange={(e) => handleChangeOption(e.target.value, i, j)} 
							value={question.options[j].optionText} 
							disabled={(question.questionType === 'TEXT') ? true : false}
						/>
						{/* value={question.options[j].optionText} /> */}
					</div>

					{/* <CropOriginalIcon /> */}

					<IconButton aria-label="delete" onClick={() => handleRemoveOption(i, j)}>
						<CloseIcon />
					</IconButton>
				</div>
			))}

			{/* Add other options section  */}
			{question.options.length < 10 &&
				<div className='add_question_body'>
					{(question.questionType !== 'TEXT' && question.questionType !== 'DROPDOWN') &&
						<input
							type={question.questionType}
							color="primary"
							inputprops={{ 'aria-label': 'secondary checkbox' }}
							style={{ marginLeft: '10px', marginRight: '10px' }}
							disabled
						/>
					}

					<div>
						<input type='text'
							className="text_input"
							style={{padding: '10px'}}
							placeholder={(question.questionType === 'TEXT') ? 'Add more field' : 'Add option'}
							value={optionText}
							onChange={(e) => setOptionText(e.target.value)}
							disabled={(question.questionType === 'TEXT') ? true : false}
						/>
						<Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: '13px', fontWeight: '600' }} onClick={() => { handleAddOption(optionText, i); setOptionText('') }}>						
							{(question.questionType === 'TEXT') ? 'Add field' : 'Add Option'}
						</Button>
					</div>
				</div>}
			{/* {question.options.length < 10 ? (
				<div className='add_question_body'>
					<FormControlLabel disabled control={
						(question.questionType !== 'text' ) ?
							<input 
                                type={question.questionType === 'dropdown'} 
                                color="primary" 
                                inputprops={{ 'aria-label': 'secondary checkbox' }} 
                                style={{ marginLeft: '10px', marginRight: '10px' }} 
                                disabled 
                            /> :
							<ShortTextIcon style={{ marginRight: '10px' }} />
					} label={
						<div>
							<input type='text' 
                                className="text_input" 
                                placeholder="add other" 
                                value={optionText} 
                                onChange={(e) => setOptionText(e.target.value)} 
                            />
							<Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: '13px', fontWeight: '600' }} onClick={() => {handleAddOption(optionText, i); setOptionText('')}}>Add Option</Button>
						</div>
					} />
				</div>
			) : ''} */}
		</div>
	)
}
