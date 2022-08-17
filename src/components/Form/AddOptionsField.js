// import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { FormControlLabel, Button  } from '@mui/material';
import ShortTextIcon from '@mui/icons-material/ShortText';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function AddOptionsField({ question, i, handleChangeOption, handleRemoveOption, handleAddOption}) {
	return (
		<div>
			{question.options.map((option, j) => (
				<div className="add_question_body" key={j}>
					{
						(question.questionType !== 'text') ?
							<input type={question.questionType} style={{ marginRight: '10px' }} /> :
							<ShortTextIcon style={{ marginRight: '10px' }} />
					}
					<div>
						<input type='text' className='text_input' placeholder='option' onChange={(e) => handleChangeOption(e.target.value, i, j)} value={question.options[j].optionText} />
						{/* value={question.options[j].optionText} /> */}
					</div>

					{/* <CropOriginalIcon /> */}

					<IconButton aria-label="delete" onClick={() => handleRemoveOption(i, j)}>
						<CloseIcon  />
					</IconButton>
				</div>
			))}
			{question.options.length < 5 ? (
				<div className='add_question_body'>
					<FormControlLabel disabled control={
						(question.questionType !== 'text') ?
							<input type={question.questionType} color="primary" inputprops={{ 'aria-label': 'secondary checkbox' }} style={{ marginLeft: '10px', marginRight: '10px' }} disabled /> :
							<ShortTextIcon style={{ marginRight: '10px' }} />
					} label={
						<div>
							<input type='text' className="text_input" style={{ fontSize: '13px', width: '60px' }} placeholder="add other" />
							<Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: '13px', fontWeight: '600' }} onClick={() => handleAddOption(i)}>Add Option</Button>
						</div>
					} />
				</div>
			) : ''}
		</div>
	)
}
