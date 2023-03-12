import Quiz from "./Components/Quiz";
import { QuizProvider } from "./Components/QuizContext";


const App = () =>{
    return (
        <div>
           <QuizProvider>
                <Quiz/>
           </QuizProvider>
            
        </div>
    )
}

export default App;