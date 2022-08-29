import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import CreateArea from "./component/CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const fetchNotes = async () => {
      const response = await axios.get("http://localhost:4000/");
      const data = await response.data;
      setNotes(data);
    };

    fetchNotes();
  }, []);

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
