//Styles
import { CategoryStyle } from "./CategoryStyle";

//Hooks
import { useContext } from "react";

//Context
import { QuizContext } from "../../Context/quiz";

//Data
import CategoryImg from "../../Img/category.svg";

export const Category = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "StartGame", payload: category });
    dispatch({ type: "ReorderQuestions" });
  };

  return (
    <CategoryStyle>
      <h2>Escolha uma categoria</h2>
      <p>
        As pergunta serão referentes a uma das linguagens selecionadas abaixo:
      </p>
      <div>
        {quizState.questions.map((question) => (
          <button
            onClick={() => chooseCategoryAndReorderQuestions(question.category)}
            key={question.category}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={CategoryImg} alt="Categoria do Quiz" />
    </CategoryStyle>
  );
};
