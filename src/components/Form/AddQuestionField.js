import { MenuItem, Select  } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SubjectIcon from '@mui/icons-material/Subject';
// import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function AddQuestionField({ question, i, handleChangeQuestion, addQuestionType }) {
	return (
		<div className='add_question_top' style={{marginBottom: '10px'}}>
			<input type="text" className="question" placeholder="Question" onChange={(e) => handleChangeQuestion(e.target.value, i)} value={question.questionText} />
			{/* <CropOriginalIcon style={{ color: '#5f6368' }} /> */}
			{/* <Select className='select' style={{ color: '#5f6368', fontSize: '13px' }}>
				<MenuItem id="text" value="Text" onClick={() => addQuestionType(i, 'text')} key={`Text`}>
					<SubjectIcon style={{ marginRight: '10px' }} />
					Paragraph
				</MenuItem>
				<MenuItem id="checkbox" value="Checkbox" onClick={() => addQuestionType(i, 'checkbox')} key={`Checkbox`}>
					<CheckBoxIcon style={{ marginRight: '10px' }} />
					Checkbox
				</MenuItem>
				<MenuItem id="radio" value="Radio" onClick={() => addQuestionType(i, 'radio')} key={`Checkbox`}>
					<RadioButtonCheckedIcon style={{ marginRight: '10px' }} />
					Multiple Choice
				</MenuItem>
			</Select> */}
			<FormControl variant="standard">
				<InputLabel>Type</InputLabel>
				<Select className='select' style={{ color: '#5f6368', fontSize: '13px' }} label="Type">
					<MenuItem id="text" value="Text" onClick={() => addQuestionType(i, 'text')} key={`Text`}>
						<SubjectIcon style={{ marginRight: '10px' }} />
						Paragraph
					</MenuItem>
					<MenuItem id="checkbox" value="Checkbox" onClick={() => addQuestionType(i, 'checkbox')} key={`Checkbox`}>
						<CheckBoxIcon style={{ marginRight: '10px' }} />
						Checkbox
					</MenuItem>
					<MenuItem id="radio" value="Radio" onClick={() => addQuestionType(i, 'radio')} key={`Checkbox`}>
						<RadioButtonCheckedIcon style={{ marginRight: '10px' }} />
						Multiple Choice
					</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}
