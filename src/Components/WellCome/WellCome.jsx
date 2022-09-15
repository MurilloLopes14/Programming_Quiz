//Styles
import { WellComeSyle } from "./WellComeStyle";

//Hooks
import { useContext } from "react";

//Compnents
import { QuizContext } from "../../Context/quiz";

//Utils
import Quiz from "../../Img/quiz.svg";

export const WellCome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <WellComeSyle>
      <h2>Seja Bem-Vindo!</h2>
      <p>Clique no botão para iniciar</p>
      <button onClick={() => dispatch({ type: "ChangeState" })}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </WellComeSyle>
  );
};
