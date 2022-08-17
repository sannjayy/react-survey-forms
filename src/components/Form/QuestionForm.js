import React, { useState} from 'react'
import './QuestionForm.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import FormFooter from './FormFooter';
import FormSidebar from './FormSidebar';
import AddQuestionField from './AddQuestionField';
import CompactQuestion from './CompactQuestion';
import AddOptionsField from './AddOptionsField';

export default function QuestionForm() {
	const [ questions, setQuestions ] = useState([
		{
			questionText: 'Question',
            questionDesc: '',
            showDescription: false,
			questionType: "radio",
			options: [
				{ optionText: 'Option 1'},
			],
			open: true,
			required: false,
		}
	])

    const handleAddMoreQuestionField = () => {
        handleExpandCloseAll();
        setQuestions([
            ...questions,
            {
                questionText: 'Question',
                questionDesc: '',
                showDescription: false,
			    questionType: "radio",
                options: [
                    { optionText: 'Option 1'},
                ],
                open: true,
                required: false,
            }
        ]);
    }

    const toggleDescription = (i) => {
        // Toggle the description field
        const newQuestion = [...questions];
        newQuestion[i].showDescription = !newQuestion[i].showDescription;
        setQuestions(newQuestion)
        // handleChangeQuestionDesc('', i)
    }
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
    const handleCopyQuestion = (i) => {
        handleExpandCloseAll();
        let question = [...questions];
        const newQuestion = {...question[i], open:true};
        let qsCopy = JSON.parse(JSON.stringify(question));
        qsCopy.push(newQuestion);
        setQuestions(qsCopy)
    }
    
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
    const handleChangeOption = (text, i, j) => {
        // i question index & j option index
        const questionOption = [...questions];
        questionOption[i].options[j].optionText = text;
        setQuestions(questionOption)
        // console.log(questionOption)
    }
    const handleRemoveOption = (i, j) => {
        // i question index & j option index
        const removeQuestionOption = [...questions];
        if (removeQuestionOption[i].options.length > 1) {
            removeQuestionOption[i].options.splice(j, 1)
        }
        setQuestions(removeQuestionOption)
        // console.log(`${i} __ ${j}`)
    }
    const handleAddOption = (i) => {
        const optionOfQuestion = [...questions];
        if (optionOfQuestion[i].options.length < 5) {
            optionOfQuestion[i].options.push({optionText: `Option ${(optionOfQuestion[i].options.length + 1)}`})
        } else {
            console.log('max 5 options allowed');
        }
        setQuestions(optionOfQuestion)
    }
    const addQuestionType = (i, type) => {
        let question = [...questions];
        question[i].questionType = type;
        setQuestions(question)
        // console.log(type)
    }
    
    const handleOnDragEnd = (result) => { 
        if (!result.destination){
            return;
        }
        const itemgg = [...questions]
        const item = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        )
        setQuestions(item);
    }
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [ removed ] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    const handleExpandCloseAll = () => {
        let qs = [...questions];
        for (let j=0; j < qs.length; j++){
            qs[j].open = false;
        }
        setQuestions(qs);
    }
    const handleExpand = (i) => {
        let qs = [...questions];
        for (let j=0; j < qs.length; j++){
            if( i === j){
                qs[j].open = true;
            } else {
                qs[j].open = false;
            } 
        }
        setQuestions(qs);
    }


	const questionsUI = () => {
		return questions.map((question, i) => (
            
            <Draggable key={i} draggableId={`${i}id`} index={i}>
                {(provided, snapshot) => (
                    <div 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div>
                            <div style={{marginBottom: '0px'}}>
                                <div style={{width: '100%', marginBottom: '0px'}}>
                                    <DragIndicatorIcon 
                                        style={{transform: 'rotate(-90deg)', color: '#DAE0E2', position: 'relative', left: '300px'}}
                                        fontSize='small'
                                    />
                                </div>
                            </div>
                            <div>
                            <Accordion expanded={question.open} onChange={() => handleExpand(i)} className={questions[i].open ? 'add_border'  : ''}>
                                <AccordionSummary
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    elevation={1}
                                    style={{ width: '100%'}}
                                >
                                    {!questions[i].open && 
                                        <CompactQuestion 
                                            questions={questions}
                                            question={question}
                                            i={i}
                                        />
                                    }					
                                </AccordionSummary>
                                
                                { questions[i].open &&
                                <div className='question_boxes'>
                                    <AccordionDetails className='add_question'>
                                        <AddQuestionField 
                                            question={question}
                                            i={i}
                                            handleChangeQuestion={handleChangeQuestion}
                                            handleChangeQuestionDesc={handleChangeQuestionDesc}
                                            addQuestionType={addQuestionType}
                                        />
                                        <AddOptionsField 
                                            question={question}
                                            i={i}
                                            handleChangeOption={handleChangeOption}
                                            handleRemoveOption={handleRemoveOption}
                                            handleAddOption={handleAddOption}
                                        />
                                        <FormFooter 
                                            question={question}
                                            i={i}
                                            handleCopyQuestion={handleCopyQuestion}
                                            handleDeleteQuestion={handleDeleteQuestion}
                                            handleRequiredQuestion={handleRequiredQuestion}
                                            toggleDescription={toggleDescription}
                                        />
                                    </AccordionDetails>
                                    <FormSidebar 
                                        handleAddMoreQuestionField={handleAddMoreQuestionField}
                                    />
                                </div> }
                            </Accordion>
                        </div>
                        </div>
                        
                    </div>
                )}
            </Draggable>				
		))
	}
	return (
		<div>
			<div className="question-form">
				<br />
				<div className="section">
					<div className="question-title-section">
						<div className="question-form-top">
							<input type="text" className="question-from-top-name" style={{color: 'blank'}} placeholder="Untitled survey" />
							<input type="text" className="question-from-top-desc" style={{color: 'blank'}} placeholder="Description" />
						</div>
					</div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {questionsUI()}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
					
				</div>
			</div>

		</div>
	)
}
