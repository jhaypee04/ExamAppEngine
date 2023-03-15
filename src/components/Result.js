import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";

function submit(cleanResult) {
  const ref = collection(firestore, "result"); // Firebase creates this automatically
  let data = {
    testData: cleanResult.length,
  };
  try {
    addDoc(ref, data);
  } catch (err) {
    console.log(err);
  }
}

const Result = ({ cleanResult }) => {
  submit(cleanResult);
  return (
    <main>
      <h1>Congratulations you have successfully Submitted</h1>

      <h3>You Scored: {cleanResult.length}</h3>
      <h4>You answered the following correctly:</h4>
      <ul>
        {cleanResult.map((result) => {
          return <li>{result}</li>;
        })}
      </ul>
    </main>
  );
};
export default Result;
