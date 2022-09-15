//Hooks
import { createContext, useReducer } from "react";

//Data
import questions from "../Data/questions_complete";

//Game Screens
const STAGES = ["Start", "Category", "MidGame", "End"];

//Initial State game
const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answeredSelected: false,
  help: false,
  optionToHide: null,
};

//Reducer Logic
const quizReducer = (state, action) => {
  switch (action.type) {
    //Change Screen
    case "ChangeState":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    //Pick up Category selected
    case "StartGame": {
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category === action.payload) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };
    }

    //Randomize questions
    case "ReorderQuestions":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });

      return {
        ...state,
        questions: reorderedQuestions,
      };

    //Change to next Question
    case "ChangeQuestion": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[3] : state.gameStage,
        answeredSelected: false,
        help: false,
      };
    }

    //Game Over to New Game Logic
    case "NewGame": {
      return initialState;
    }

    //Check if answer's correct
    case "CheckAnswer": {
      if (state.answeredSelected) {
        return state;
      }

      const answer = action.payload.answer;
      const option = action.payload.option;

      let correctAnswer = 0;
      if (answer === option) {
        correctAnswer = 1;
      }

      return {
        ...state,
        score: state.score + correctAnswer,
        answeredSelected: option,
      };
    }
    //Show Tip Logic
    case "ShowTip": {
      return {
        ...state,
        help: "tip",
      };
    }

    //Remove an option
    case "RemoveOption": {
      const questionWithoutOption = state.questions[state.currentQuestion];

      let repeat = true;
      let optionToHide;

      questionWithoutOption.options.forEach((option) => {
        if (option !== questionWithoutOption.answer && repeat) {
          optionToHide = option;
          repeat = false;
        }
      });

      return {
        ...state,
        optionToHide,
        help: true,
      };
    }

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
