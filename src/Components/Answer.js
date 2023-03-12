import './Quiz.css'

const Answer = (props) =>{

    const letters = ['A','B', 'C', 'D']

    return (

        <div 
            className='answer'
            onClick = {()=> props.selectAnswer(props.answer) }
        >
            <div className='answerLetter'>
                {letters[props.index]}
            </div>

            <div className='answerText'>
                {props.answer}
            </div>   
        
        </div>
    )
}

export default Answer;