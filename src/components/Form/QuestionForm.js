import React, { useContext } from 'react'
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
import FormContext from '../../context/form/FormContext';

export default function QuestionForm() {
    const { questions, setQuestions } = useContext(FormContext);

   
    const handleCopyQuestion = (i) => {
        handleExpandCloseAll();
        let question = [...questions];
        const newQuestion = {...question[i], open:true};
        let qsCopy = JSON.parse(JSON.stringify(question));
        qsCopy.push(newQuestion);
        setQuestions(qsCopy)
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
            if(i === j){
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
                                        />
                                        <AddOptionsField 
                                            question={question}
                                            i={i}

                                            questions={questions}
                                            setQuestions={setQuestions}
                                        />
                                        <FormFooter 
                                            question={question}
                                            i={i}
                                            handleCopyQuestion={handleCopyQuestion}
                                        />
                                    </AccordionDetails>
                                    <FormSidebar 
                                        handleExpandCloseAll={handleExpandCloseAll}
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
	)
}
