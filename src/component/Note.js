import React from "react";
import axios from "axios";
import { useNotesContext } from "./context/useNoteContext";

const Note = ({ noteItem }) => {
  const { dispatch } = useNotesContext();

  const handleClick = async () => {
    const response = await axios.delete(
      `http://localhost:4000/${noteItem._id}`
    );
    console.log("response", response);
    console.log("respnse data/id", response.data);
    if (response.status === 200) {
      console.log("the note is deleted");

      dispatch({ type: "DELETE", payload: response.data });
    }
  };

  return (
    <div className="note">
      <h1>{noteItem.title}</h1>
      <p>{noteItem.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Note;
