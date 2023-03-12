import './Quiz.css'
import { useContext } from 'react';
import { QuizContext } from './QuizContext';
import Answer from './Answer';

const Question = () =>{

    const [state,dispatch] = useContext(QuizContext)
    const currentQuestion = state.questions[state.currentQuestion]

    return (

        <div>
            <p className='questionText'>{currentQuestion.question}</p>
            <div className='options'>
                {
                    state.answers.map((answer, index) => (
                        <Answer
                            key={index}
                            answer= {answer}
                            index ={index}
                            selectAnswer ={
                                (answer)=> dispatch({type:'select', payload: answer})
                            }
                        /> 
                    ))
                }
            </div>
        </div>

    )
}

export default Question;