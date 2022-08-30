import { useContext } from "react";
import { NotesContext } from "./NotesContext";

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw Error("useContext must be used inside context provider");
  }

  return context;
};
