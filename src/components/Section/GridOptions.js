import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function GridOptions({ question, i, handleAddOption, questions,
    setQuestions,}) {
	const [rowText, setRowText] = useState('')
	const [columnText, setColumnText] = useState('')
	const rows = question.questionGridItem.rows;
	const columns = question.questionGridItem.columns;

	// console.log('questions -> ', questions);
	console.log('rows -> ', rows);

	const handleColumnChangeOption = (text, i, j) => {
        const questionOption = [...questions];
        questionOption[i].questionGridItem.columns.options[j].value = text;
        setQuestions(questionOption)
    }
	const handleRemoveColumnOption = (i, j) => {
        // i question index & j option index
        const removeQuestionOption = [...questions];
        if (removeQuestionOption[i].questionGridItem.columns.options.length > 1) {
            removeQuestionOption[i].questionGridItem.columns.options.splice(j, 1)
        }
        setQuestions(removeQuestionOption)
        // console.log(`${i} __ ${j}`)
    }
	const handleRowChangeOption = (text, i, k) => {
        const questionOption = [...questions];
        questionOption[i].questionGridItem.rows[k].title = text;
        setQuestions(questionOption)
    }
	
	const handleRemoveRowOption = (i, j) => {
        // i question index & j option index
        const removeQuestionOption = [...questions];
        if (removeQuestionOption[i].questionGridItem.rows.length > 1) {
            removeQuestionOption[i].questionGridItem.rows.splice(j, 1)
        }
        setQuestions(removeQuestionOption)
        // console.log(`${i} __ ${j}`)
    }
	return (
		<Box sx={{ flexGrow: 1, marginTop: 5, marginBottom: 5}}>
			<Grid container spacing={2}>
				{/* Row */}
				<Grid item xs={6} md={6} sm={12}>
					<Typography variant="button" display="block" gutterBottom>Row</Typography>
					{rows.map((row, k) => (
						<div className="add_question_body" key={k}>
							<div>
								<input 
									type='text' 
									className='text_input' 
									style={{ width: '65%'}}
									placeholder='option' 
									onChange={(e) => handleRowChangeOption(e.target.value, i, k)} 
									value={row.title} 
								/>
							</div>
							<IconButton aria-label="delete" onClick={() => handleRemoveRowOption(i, k)}>
								<CloseIcon />
							</IconButton>
						</div>
					))}


					{rows.length < 10 &&
						<div className='add_question_body'>

							<div>
								<input type='text'
									className="text_input"
									style={{ width: '65%'}}
									placeholder="Add row"
									value={rowText}
									onChange={(e) => setRowText(e.target.value)}
								/>
								<Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: '13px', fontWeight: '600' }}>Add Row</Button>
							</div>
						</div>
					}
				</Grid>
				{/* Column */}
				<Grid item xs={6} md={6} sm={12}>
					<Typography  variant="button" display="block" gutterBottom>Column</Typography>
					{columns.options.map((column, j) => (
						<div className="add_question_body" key={j}>
							<input
								type={columns.type}
								color="primary"
								inputprops={{ 'aria-label': 'secondary checkbox' }}
								style={{ marginLeft: '10px', marginRight: '10px' }}
								disabled
							/>
							<div>
								<input 
									type='text' 
									className='text_input' 
									style={{ width: '65%'}}
									placeholder='option' 
									onChange={(e) => handleColumnChangeOption(e.target.value, i, j)} 
									value={column.value} 
								/>
							</div>
							<IconButton aria-label="delete" onClick={() => handleRemoveColumnOption(i, j)}>
								<CloseIcon />
							</IconButton>
						</div>
					))}

					{columns.options.length < 10 &&
						<div className='add_question_body'>
							<div>
								<input type='text'
									className="text_input"
									style={{ width: '65%'}}
									placeholder="Add column"
									value={columnText}
									onChange={(e) => setColumnText(e.target.value)}
								/>
								<Button size="small" style={{ textTransform: 'none', color: "#4285f4", fontSize: '13px', fontWeight: '600' }}>Add Column</Button>
							</div>
						</div>
					}
					
				</Grid>
			</Grid>
		</Box>

	)
}
