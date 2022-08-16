import FilterNoneIcon from '@mui/icons-material/FilterNone';
import DeleteIcon from '@mui/icons-material/Delete';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Switch, IconButton  } from '@mui/material';

export default function FormFooter({ i, handleCopyQuestion, handleDeleteQuestion, handleRequiredQuestion }) {
	return (
		<div className="add_footer">
			<div className="add_question_bottom_left">
				{/* <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
					<NorthEastIcon />
					Answer Key
				</Button> */}
			</div>
			<div className="add_question_bottom">
				<IconButton aria-label="copy" onClick={() => handleCopyQuestion(i)}>
					<FilterNoneIcon />
				</IconButton>
				<IconButton aria-label="delete" onClick={() => handleDeleteQuestion(i)}>
					<DeleteIcon />
				</IconButton>
				<span>Required <Switch name="checkedA" color="primary" onClick={() => handleRequiredQuestion(i)} /></span>
				{/* <IconButton>
					<MoreVertIcon />
				</IconButton> */}
			</div>
		</div>
	)
}
