//Styles
import { QuestionStyle } from "./QuestionStyle";

//Hooks
import { useContext } from "react";

//Context
import { QuizContext } from "../../Context/quiz";

//Components
import { Option } from "../Option/Option";

export const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CheckAnswer",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <QuestionStyle>
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div className="options_container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
            hide={quizState.optionToHide === option ? "hide" : null}
          />
        ))}
      </div>
      {!quizState.answeredSelected && !quizState.help && (
        <>
          {currentQuestion.tip && (
            <button onClick={() => dispatch({ type: "ShowTip" })}>Dica</button>
          )}
          <button onClick={() => dispatch({ type: "RemoveOption" })}>
            Excluir uma
          </button>
        </>
      )}
      {!quizState.answeredSelected && quizState.help === "tip" && (
        <p>{currentQuestion.tip}</p>
      )}
      {quizState.answeredSelected && (
        <button onClick={() => dispatch({ type: "ChangeQuestion" })}>
          Continuar
        </button>
      )}
    </QuestionStyle>
  );
};
