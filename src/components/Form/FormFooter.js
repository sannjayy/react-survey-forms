import FilterNoneIcon from '@mui/icons-material/FilterNone';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Switch, IconButton, Divider } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { StyledMenu } from '../Styled/StyledMenu';
import React, { useContext, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import FormContext from '../../context/form/FormContext';



export default function FormFooter({question, i, handleCopyQuestion }) {
    const { questions, setQuestions } = useContext(FormContext);
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMoreClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMoreClose = () => {
        setAnchorEl(null);
    };

    // Footer Button Actions
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
        // console.log(`${reqQuestion[i].required} - ${i}`)
        setQuestions(reqQuestion);
    }

    const toggleDescription = (i) => {
        // Toggle the description field
        const newQuestion = [...questions];
        newQuestion[i].showDescription = !newQuestion[i].showDescription;
        setQuestions(newQuestion)
        // handleChangeQuestionDesc('', i)
    }


    const toggleLimitOnePerColumn = (i) => {
        const newQuestion = [...questions];
        if (newQuestion[i].questionGridItem['onePerColumn']){
            newQuestion[i].questionGridItem['onePerColumn'] = false;
        } else {
            newQuestion[i].questionGridItem['onePerColumn'] = true;
        }
        setQuestions(newQuestion)
    }


    return (
        <div className="add_footer">
            <div className="add_question_bottom_left">
                {/* <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
					<NorthEastIcon />
					Answer Key
				</Button> */}
            </div>
            <div className="add_question_bottom">
                <Tooltip title="Duplicate Question">
                    <IconButton aria-label="copy" onClick={() => handleCopyQuestion(i)}>
                        <FilterNoneIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete Question">
                    <IconButton aria-label="delete" onClick={() => handleDeleteQuestion(i)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
                <Divider orientation='vertical' light={true} component='div' />
                <Tooltip title="Make Question Required">
                    <span style={{ marginLeft: '10px', marginRight: '10px' }}>
                         
                        {(question.questionType === 'RADIO_GRID' || question.questionType === 'CHECKBOX_GRID') ? 'Required each row': 'Required'}
                        <Switch name="checkedA" color="primary" onClick={() => handleRequiredQuestion(i)} />
                    </span>
                </Tooltip>

                <Tooltip title="More Options">
                    <IconButton
                        id="form-more-button"
                        aria-controls={open ? 'form-more-button' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        disableelevation="true"
                        onClick={handleMoreClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                </Tooltip>
                <div>
                    <StyledMenu
                        id="form-more-menu"
                        MenuListProps={{
                            'aria-labelledby': 'form-more-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMoreClose}
                    >
                        <MenuItem onClick={() => { toggleDescription(i); handleMoreClose(); }} disableRipple>
                            {question.showDescription ? <DoneIcon /> : <AddIcon />}
                            Description
                        </MenuItem>
                        {(question.questionType === 'RADIO_GRID' || question.questionType === 'CHECKBOX_GRID') &&
                            <MenuItem onClick={() => { toggleLimitOnePerColumn(i); handleMoreClose(); }} disableRipple>
                                {question.questionGridItem['onePerColumn'] ? <DoneIcon /> : <AddIcon /> }
                                Limit one per column
                            </MenuItem>
                        }
                    </StyledMenu>
                </div>
            </div>
        </div>
    )
}
