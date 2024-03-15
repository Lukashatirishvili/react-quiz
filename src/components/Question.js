import { useQuiz } from "../context/QuizContex.js";
import Option from "./Options.js";

function Question() {
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
