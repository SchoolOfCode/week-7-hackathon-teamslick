import "./App.css";
import { useState } from "react";
import Flashcards from "./components/Flashcards.jsx";
import Form from "./components/Form/Form.jsx";

function App() {
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");

  const [qAndA, setQAndA] = useState([
    [
      "What do we call variables that we pass down to other components?",
      "props",
    ],
    [
      "Why should you use state insted of local variables for values we want to display in components?",
      "Because otherwise React can't keep track of its value and won't re-render to change what's displayed.",
    ],
    [
      "In what direction does data move in React?",
      "From parent to child in a unidirectional flow.",
    ],
    [
      "How do you mutate a component's state?",
      "You should never mutate state - it is read-only. Make a copy if necessary.",
    ],
  ]);

  //This is the function we want to get called when the submit button in form is clicked
  //so we need to pass it down to the Form

  // function addQandA() {
  //   console.log("in the addQandA function!");
  //   const newArr = qAndA.slice(); // make a copy, since we mustn't mutate state
  //   newArr.push([newQ, newA]);
  //   setQAndA(newArr);
  // }

  //We also need this function to handle change in the text input letter by letter

  function handleChangeQ(e) {
    setNewQ(e.target.value);
  }

  function handleChangeA(e) {
    setNewA(e.target.value);
  }

  function updateData(e) {
    e.preventDefault(); //this stops the page refreshing
    const newArr = qAndA.slice(); // make a copy, since we mustn't mutate state
    newArr.push([newQ, newA]);
    setQAndA(newArr);
  }

  return (
    <>
      <Form
        qText={newQ}
        aText={newA}
        handleChangeQ={handleChangeQ}
        handleChangeA={handleChangeA}
        onClick={updateData}
      />
      <Flashcards data={qAndA} />
    </>
  );
}

export default App;
