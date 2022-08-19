import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton  } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import React, { useContext } from 'react';
import FormContext from '../../context/form/FormContext';

export default function FormSidebar({ handleExpandCloseAll }) {
    const { questions, setQuestions } = useContext(FormContext);
    const empty_question = {
        questionText: 'Question',
        questionDesc: '',
        showDescription: false,
        questionType: "RADIO",
        options: [],
        questionGridItem: {
            rows: [],
            columns:{
                type:"RADIO",
                options:[]
            },
        },
        open: true,
        required: false,
    }  
    const handleAddMoreQuestionField = () => {
        handleExpandCloseAll();
        setQuestions([
            ...questions,
            empty_question
        ]);
    }
	return (
		<div className="question_edit">
            <Tooltip title="Add More Question">
                <IconButton onClick={handleAddMoreQuestionField} >
                    <AddCircleOutlineIcon className="edit" />
                </IconButton>
            </Tooltip>
			
			{/* <OndemandVideoIcon className="edit" />
			<CropOriginalIcon className="edit" />
			<TextFieldsIcon className="edit" /> */}
		</div>
	)
}
