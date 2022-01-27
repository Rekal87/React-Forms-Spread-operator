import React, { useState } from "react";

function List() {
  const [inputNoteText, setInputNoteText] = useState("");
  const [inputText, setInputText] = useState([]);

  function handleInputText(event) {
    const newInputValue = event.target.value;
    setInputNoteText(newInputValue);
  }

  function addText() {
    setInputText((previous) => {
      return [...previous, inputNoteText];
    });
    setInputNoteText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>My to-do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputNoteText} onChange={handleInputText} />
        <button onClick={addText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {inputText.map((todoList) => (
            <li>{todoList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
