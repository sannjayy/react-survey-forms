import { MenuItem, Select  } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SubjectIcon from '@mui/icons-material/Subject';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import DragIndicatorSharpIcon from '@mui/icons-material/DragIndicatorSharp';
import Divider from '@mui/material/Divider';
import ArrowDropDownCircleSharpIcon from '@mui/icons-material/ArrowDropDownCircleSharp';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import React, { useContext } from 'react';
import FormContext from '../../context/form/FormContext';

export default function AddQuestionField({ question, i }) {
    const { questions, setQuestions } = useContext(FormContext);

    const handleChangeQuestion = (text, i) => {
        const newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion)
        // console.log(newQuestion)
    }
    const handleChangeQuestionDesc = (text, i) => {
        const newQuestion = [...questions];
        newQuestion[i].questionDesc = text;
        setQuestions(newQuestion)
        // console.log(newQuestion)
    }

    const addQuestionType = (i, type) => {
        let question = [...questions];
        question[i].questionType = type;
        
        if (type === 'CHECKBOX_GRID'){
            question[i].questionGridItem.columns.type = 'CHECKBOX';
        } else if (type === 'RADIO_GRID'){
            question[i].questionGridItem.columns.type = 'RADIO';
        }
        setQuestions(question)
        // console.log(type)
    }
	return (
        <div>
            <div className='add_question_top' style={{marginBottom: '10px'}}>
                <input type="text" className="question" placeholder="Question" onChange={(e) => handleChangeQuestion(e.target.value, i)} value={question.questionText} />
                
                {/* <CropOriginalIcon style={{ color: '#5f6368' }} /> */}		
                <FormControl variant="standard">
                    <InputLabel id="select-type-label">Select Type</InputLabel>
                    <Select 
                        className='select' 
                        style={{ color: '#5f6368', fontSize: '13px' }} 
                        label="Select Type"
                        onChange={(e) => addQuestionType(i, e.target.value)}
                        value={question.questionType}
                        labelId="select-type-label"
                    >
                        <MenuItem value='TEXT'>
                            <SubjectIcon style={{ marginRight: '10px' }} />
                            Text
                        </MenuItem>
                        <MenuItem value='RADIO'>
                            <RadioButtonCheckedIcon style={{ marginRight: '10px' }} />
                            Choices
                        </MenuItem>
                        <MenuItem value='CHECKBOX'>
                            <CheckBoxIcon style={{ marginRight: '10px',}} />
                            Checkboxes
                        </MenuItem>
                        <MenuItem value='DROPDOWN'>
                            <ArrowDropDownCircleSharpIcon style={{ marginRight: '10px',}} />
                            Dropdown
                        </MenuItem>
                        
                        <Divider />
                        <MenuItem value='CHECKBOX_GRID'>
                            <ViewModuleIcon style={{ marginRight: '10px' }} />
                            Multiple Checkbox Grid
                        </MenuItem>
                        <MenuItem value='RADIO_GRID'>
                            <DragIndicatorSharpIcon style={{ marginRight: '10px' }} />
                            Multiple Choice Grid
                        </MenuItem>
                    </Select>
                </FormControl>            
            </div>
            {question.showDescription &&
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <input type="text" className="description" placeholder="Description" onChange={(e) => handleChangeQuestionDesc(e.target.value, i)} value={question.questionDesc} />
                    </Grid>                
                </Grid>
            }
        </div>
	)   
}
