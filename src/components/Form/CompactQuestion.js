import Typography from '@mui/material/Typography';
import { FormControlLabel } from '@mui/material';


export default function CompactQuestion({questions, question, i}) {
	return (
		<div className="saved_question">

			<Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>
				{i + 1}. {questions[i].questionText}
			</Typography>

			{question.options.map((option, j) => (

				<div key={j}>
					<div style={{ display: 'flex' }}>
						<FormControlLabel style={{ marginLeft: '5px', marginBottom: '5px' }} disabled control={<input type={question.questionType} color="primary" style={{ marginRight: '3px' }} required={question.required} />}
							label={
								<Typography style={{ fontSize: '13px', fontWeight: '400', letterSpacing: '.2px', lineHeight: '20px', color: '#202124' }}>
									{question.options[j].optionText}
								</Typography>
							}
						/>
					</div>
				</div>

			))}
		</div>
	)
}
