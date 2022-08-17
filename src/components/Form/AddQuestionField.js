import { MenuItem, Select  } from '@mui/material';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SubjectIcon from '@mui/icons-material/Subject';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
export default function AddQuestionField({ question, i, handleChangeQuestion, handleChangeQuestionDesc, addQuestionType, }) {
    
	return (
        <div>
		<div className='add_question_top' style={{marginBottom: '10px'}}>
            <input type="text" className="question" placeholder="Question" onChange={(e) => handleChangeQuestion(e.target.value, i)} value={question.questionText} />
            
			{/* <CropOriginalIcon style={{ color: '#5f6368' }} /> */}		
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
        {question.showDescription &&
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <input type="text" className="description" placeholder="Description" onChange={(e) => handleChangeQuestionDesc(e.target.value, i)} value={question.questionDesc} />
            </Grid>                
        </Grid>}
        </div>
	)   
}
