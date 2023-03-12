import React, { createContext, useReducer } from 'react';
import { shuffleAnswers } from './shuffleAnswers';


export const QuizContext = createContext();

const questions = [
    {
      question: "What does CSS stand for?",
      incorrectAnswers: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
  
    {
      question:
        "Where in an HTML document is the correct place to refer to an external style sheet?",
      incorrectAnswers: [
        "In the <body> section",
        "At the end of the document",
        "You can't refer to an external style sheet",
      ],
      correctAnswer: "In the <head> section",
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      incorrectAnswers: ["<script>", "<headStyle>", "<css>"],
      correctAnswer: "<style>",
    },
    // {
    //   question: "Which HTML attribute is used to define inline styles?",
    //   incorrectAnswers: ["class", "font", "styles"],
    //   correctAnswer: "style",
    // },
    // {
    //   question: "Which is the correct CSS syntax?",
    //   incorrectAnswers: [
    //     "{body:color=black;}",
    //     "{body;color:black;}",
    //     "body:color=black;",
    //   ],
    //   correctAnswer: "body {color: black;}",
    // },
    // {
    //   question: "How do you insert a comment in a CSS file?",
    //   incorrectAnswers: [
    //     "' this is a comment",
    //     "// this is a comment",
    //     "// this is a comment //",
    //   ],
    //   correctAnswer: "/* this is a comment */",
    // },
    // {
    //   question: "Which property is used to change the background color?",
    //   incorrectAnswers: ["color", "bgcolor", "bgColor"],
    //   correctAnswer: "background-color",
    // },
    // {
    //   question: "How do you add a background color for all <h1> elements?",
    //   incorrectAnswers: [
    //     "all.h1 {background-color:#FFFFFF;}",
    //     "h1.setAll {background-color:#FFFFFF;}",
    //     "h1.all {background-color:#FFFFFF;}",
    //   ],
    //   correctAnswer: "h1 {background-color:#FFFFFF;}",
    // },
]

const initialState = {
    questions:questions,
    answers: shuffleAnswers(questions[0]),
    currentQuestion:0,
    currentAnswer:"",
    showResults: false,
    score:0,
    userChoices:"",
    showAnswers: false,
}

  
const quizReducer = (state, action) => {
    switch (action.type) {

        case 'select':{
            return {
                ...state,
                currentAnswer: action.payload,
            };
        }

        case "next": {

            const score =
            state.currentAnswer ===
            state.questions[state.currentQuestion].correctAnswer
            ? state.score + 1
            : state.score;

            const showResults =
                state.currentQuestion === state.questions.length - 1;

            const currentQuestion = showResults
                ? state.currentQuestion
                : state.currentQuestion + 1;

            const answers = showResults
                ? []
                : shuffleAnswers(state.questions[currentQuestion]);

            return {
                ...state,
                currentAnswer: "",
                showResults,
                currentQuestion,
                answers,
                score,
                userChoices:[...state.userChoices,state.currentAnswer]
            };
        }

        case "restart": {
          return initialState;
        }

        case "showAnswers" :{
          return {
            ...state,
            showAnswers: true,
          }
        }
        default:
          return state;
    }
};


  
export const QuizProvider = ({ children }) => {

    const state= useReducer(quizReducer, initialState);
  
  
    return (
      <QuizContext.Provider value={ state}>
        {children}
      </QuizContext.Provider>
    );
  };
 
  
  
  