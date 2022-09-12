import React, { useEffect } from "react";
import axios from "axios";

import { useNotesContext } from "./component/context/useNoteContext";
// import { NotesContext } from "./component/context/NotesContext";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";

const App = () => {
  const { isLoading, notes, dispatch } = useNotesContext();
  // const { notes, dispatch } = useContext(NotesContext);

  useEffect(() => {
    const fetchNotes = async () => {
      dispatch({ type: "START-LOADING" });
      const response = await axios.get("https://note-app.herokuapp.com/");
      const data = await response.data;
      dispatch({ type: "FETCH", payload: data });
      dispatch({ type: "END-LOADING" });
    };

    fetchNotes();
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <CreateArea />
      {notes &&
        notes.map((noteItem) => (
          <Note noteItem={noteItem} key={noteItem._id} />
        ))}
      <Footer />
    </div>
  );
};

export default App;
