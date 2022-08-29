import React from "react";

const Note = ({ noteItem }) => {
  return (
    <div className="note">
      <h1>{noteItem.title}</h1>
      <p>{noteItem.content}</p>
      <button>Delete</button>
    </div>
  );
};

export default Note;
