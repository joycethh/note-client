import React from "react";
import axios from "axios";

const Note = ({ noteItem }) => {
  const handleClick = async () => {
    const response = await axios.delete(
      `http://localhost:4000/${noteItem._id}`
    );
    if (response.status === 200) {
      console.log("the note is deleted");
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
