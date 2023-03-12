import './Quiz.css'
import { useContext } from 'react';
import { QuizContext } from './QuizContext';

const ShowAnswers = () => {

    const [state,dispatch] = useContext(QuizContext)

    return (
        <div className='showAnswers'>
            <h2>Quiz Answers</h2>
            {
                state.questions.map((question,index) => (
                    <div className='quizAnswer' key={index}>
                        <h5>{index+1}: {question.question} </h5>
                        <div className='answers'>
                            <p>Correct answer: {question.correctAnswer}</p>
                            <p>Your answer: {state.userChoices[index]}</p>
                        </div>
                    </div>
                ) )
            }
        </div>
    )
}

export default ShowAnswers;