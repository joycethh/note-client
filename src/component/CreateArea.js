import axios from "axios";
import React, { useState } from "react";

import { useNotesContext } from "./context/useNoteContext";

const CreateArea = () => {
  const { dispatch } = useNotesContext();

  const [userInput, setUserInput] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    //get target value, new note
    const newNote = userInput;

    //send api post request
    const response = await axios.post("http://localhost:4000/", newNote);

    //add new step: dispatch the reducr function
    dispatch({ type: "CREATE", payload: response.data });

    //set the userInput to empty filded after new note added;
    setUserInput({
      title: "",
      content: "",
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSumbit();
    }
  };

  return (
    <div>
      <form className="create-note" onKeyDown={handleKeyDown}>
        <input
          name="title"
          onChange={handleChange}
          value={userInput.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          onChange={handleChange}
          value={userInput.content}
          placeholder="Take a note"
          row={3}
        />

        <div>
          <button onClick={handleSumbit}>Add</button>
        </div>
      </form>
    </div>
  );
};

export default CreateArea;
