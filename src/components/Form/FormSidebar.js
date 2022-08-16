import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import TextFieldsIcon from '@mui/icons-material/TextFields';
// import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { IconButton  } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


export default function FormSidebar({handleAddMoreQuestionField}) {
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
