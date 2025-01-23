import { useState } from "react";

export default function Form({
  qText,
  aText,
  handleChangeQ,
  handleChangeA,
  onClick,
}) {
  // We want to take the input of Question and Answer and store it in an object
  // We click an Add button and sends that object down to Flashcards

  // Actually, we are going to need to lift these up to App,
  // and have the handleSubmit function and the text be passed down from there...?

  // function handleSubmit(e) {
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   console.log(formData.entries);
  // }

  return (
    <div>
      <form>
        <input name="q" value={qText} onChange={handleChangeQ}></input>
        <input name="a" value={aText} onChange={handleChangeA}></input>
        <button onClick={onClick}>Add</button>
      </form>
    </div>
  );
}
