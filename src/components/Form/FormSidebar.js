import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
// import TextFieldsIcon from '@mui/icons-material/TextFields';
// import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import { IconButton  } from '@mui/material';


export default function FormSidebar({handleAddMoreQuestionField}) {
	return (
		<div className="question_edit">
			<IconButton onClick={handleAddMoreQuestionField} >
				<AddCircleOutlineIcon className="edit" />
			</IconButton>
			
			{/* <OndemandVideoIcon className="edit" />
			<CropOriginalIcon className="edit" />
			<TextFieldsIcon className="edit" /> */}
		</div>
	)
}
