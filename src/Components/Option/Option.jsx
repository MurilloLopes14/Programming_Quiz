//Styles
import "./OptionStyle.css";

//Hooks
import { useContext } from "react";

//Context
import { QuizContext } from "../../Context/quiz";

export const Option = ({ option, answer, selectOption, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answeredSelected && option === answer ? "correct" : ""
      } ${quizState.answeredSelected && option !== answer ? "wrong" : ""} ${
        hide ? "hide" : null
      }`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};
