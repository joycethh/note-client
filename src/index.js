import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NoteContextProvider } from "./component/context/NotesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NoteContextProvider>
      <App />
    </NoteContextProvider>
  </React.StrictMode>
);
