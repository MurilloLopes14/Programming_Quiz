//Style
import { AppStyle } from "./Style";

//Hooks
import { useContext, useEffect } from "react";

//Context
import { QuizContext } from "./Context/quiz";

//Components
import { WellCome } from "./Components/WellCome/WellCome";
import { Category } from "./Components/Category/Category";
import { Question } from "./Components/Question/Question";
import { GameOver } from "./Components/GameOver/GameOver";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <AppStyle>
      <h1>Programming quiz</h1>
      {quizState.gameStage === "Start" && <WellCome />}
      {quizState.gameStage === "Category" && <Category />}
      {quizState.gameStage === "MidGame" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </AppStyle>
  );
}

export default App;
