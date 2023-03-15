import { useState } from "react";
import { data } from "../database/data";

import Main from "./Main";
import Result from "./Result";
import Section from "./Section";

const init_item = {
  questionNumber: 1,
  Question: "What are two things you can never eat for breakfast?",
  RightAnswer: "Lunch and Dinner",
  AnswerOptions: ["Option 1", "Option 2", "Lunch and Dinner", "Option 4"],
};

const Body = () => {
  const [db, setDb] = useState(init_item);
  const [finish, setFinish] = useState(false);

  // const [toggler, setToggler] = useState(false);

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  const [selection, setSelection] = useState([]);
  const cleanResult = removeDuplicates(selection);

  console.log(cleanResult);

  function getClickedOption(option) {
    if (option === db.RightAnswer) {
      console.log(option, " is the right choice");
      setSelection((prev) => {
        return [...prev, option];
      });

      // setToggler(!toggler);
    } else {
      console.log("wrong choice");
    }
  }

  function getClickedNumber(id) {
    let singleObject;
    let newArr = data.filter((item) => {
      return item.questionNumber === id;
    });
    if (newArr == false) {
      alert("Are you done?");
      newArr = [init_item];
      singleObject = newArr[0];
      setDb(singleObject);
      setFinish(true);
    }
    singleObject = newArr[0];
    setDb(singleObject);
  }

  return (
    <>
      <Section get={getClickedNumber} />
      {finish === true ? (
        <Result cleanResult={cleanResult} />
      ) : (
        <Main
          db={db}
          get={getClickedNumber}
          getClickedOption={getClickedOption}
        />
      )}
    </>
  );
};
export default Body;
