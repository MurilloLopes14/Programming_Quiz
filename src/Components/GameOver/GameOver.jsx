//Styles
import { GameOverStyle } from "./GameOverStyle";

//Hooks
import { useContext } from "react";

//Context
import { QuizContext } from "../../Context/quiz";

//Utils
import WellDone from "../../Img/welldone.svg";

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <GameOverStyle>
      <h2>Game Over</h2>
      <p>Pontuação: {quizState.score} </p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <img src={WellDone} alt="Quiz End" />
      <button onClick={() => dispatch({ type: "NewGame" })}>
        Reiniciar Jogo
      </button>
    </GameOverStyle>
  );
};
