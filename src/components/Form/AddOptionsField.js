// import CropOriginalIcon from '@mui/icons-material/CropOriginal';
// import { FormControlLabel, Button } from '@mui/material';
// import ShortTextIcon from '@mui/icons-material/ShortText';
// import CloseIcon from '@mui/icons-material/Close';
// import { IconButton } from '@mui/material';
// import { useState } from 'react';
import GridOptions from '../Section/GridOptions';
import SimpleOptions from '../Section/SimpleOptions';

export default function AddOptionsField({ 
    question, 
    i, 
    handleChangeOption,
    handleRemoveOption, 
    handleAddOption,

    questions,
    setQuestions,
}) {
    

    return (
        <>
            {(question.questionType === 'CHECKBOX_GRID' || question.questionType === 'RADIO_GRID') ? 
                <GridOptions 
                    question={question}
                    i={i}
                    handleAddOption={handleAddOption}

                    questions={questions}
                    setQuestions={setQuestions}
                />
                :
                <SimpleOptions 
                    question={question}
                    i={i}
                    handleChangeOption={handleChangeOption}
                    handleRemoveOption={handleRemoveOption}
                    handleAddOption={handleAddOption}
                />
            }
        </>
           
    )
}
