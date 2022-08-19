import { useState } from "react";
import FormContext from "./FormContext";

const FormStateProvider = (props) => {   
    // Change also from Form/FormSidebar.js 
    const [ questions, setQuestions ] = useState([{
        questionText: 'Question',
        questionDesc: '',
        showDescription: false,
        questionType: "RADIO",
        options: [],
        questionGridItem: {
            rows: [],
            columns:{
                type:"RADIO",
                options:[]
            },
        },
        open: true,
        required: false,
    }])
    
    return (
        <FormContext.Provider value={{questions, setQuestions}}>
            {props.children}
        </FormContext.Provider>
    )
}
export default FormStateProvider