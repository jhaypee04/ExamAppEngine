import { useState } from "react";

const Main = ({ db, get, getClickedOption }) => {
  const [toggler, setToggler] = useState(false);
  const arr = db.AnswerOptions;

  return (
    <main>
      <header>Question {db.questionNumber}</header>
      {/* <article> */}
      <div className="question">{db.Question}</div>

      {arr.map((a, i) => {
        return (
          <div
            // className="option blue"
            className={`option ${toggler === true ? "blue" : "no-color"}`}
            key={i}
            onClick={() => {
              getClickedOption(a);
            }}
          >
            <span className="list">{i + 1}.</span>
            <span className="text">{a}</span>
          </div>
        );
      })}
      <div className="next blue" onClick={() => get(db.questionNumber - 1)}>
        Previous
      </div>
      <div className="next blue" onClick={() => get(db.questionNumber + 1)}>
        Next
      </div>
    </main>
  );
};
export default Main;
