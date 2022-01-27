import React, { useState } from "react";

function Component() {
  const [userText, setUserText] = useState("");
  const [itemList, setItemList] = useState([]);

  function inputTextField(event) {
    const newTextValue = event.target.value;
    setUserText(newTextValue);
  }

  function clickSaveButton() {
    setItemList((prevValues) => {
      return [...prevValues, userText];
    });
    setUserText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>My list</h1>
      </div>
      <div className="form">
        <input value={userText} type="text" onChange={inputTextField} />
        <button onClick={clickSaveButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((todoList) => {
            return <li>{todoList}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Component;
