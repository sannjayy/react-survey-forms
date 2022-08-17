import FilterNoneIcon from '@mui/icons-material/FilterNone';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Switch, IconButton, Divider } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { StyledMenu } from '../Styled/StyledMenu';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';

export default function FormFooter({question, i, handleCopyQuestion, handleDeleteQuestion, handleRequiredQuestion, toggleDescription }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
                    <span style={{ marginLeft: '10px', marginRight: '10px' }}>Required <Switch name="checkedA" color="primary" onClick={() => handleRequiredQuestion(i)} /></span>
                </Tooltip>

                <Tooltip title="More Options">
                    <IconButton
                        id="form-more-button"
                        aria-controls={open ? 'form-more-button' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        disableelevation="true"
                        onClick={handleClick}
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
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => { toggleDescription(i); handleClose(); }} disableRipple>
                            {question.showDescription ? <DoneIcon /> : <AddIcon />}
                            Description
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                            <DoneIcon />
                            Limit one response per column
                        </MenuItem>
                    </StyledMenu>
                </div>
            </div>
        </div>
    )
}
