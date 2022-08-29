import { createContext } from "react";

export const NotesContext = createContext();

export const NoteContextProvider = () => {
  return <NotesContext.Provider></NotesContext.Provider>;
};
