import { createContext, useReducer } from "react";

//create notes context
export const NotesContext = createContext();

//create note reducer
export const noteReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        notes: action.payload,
      };
    case "CREATE":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((note) => note._id !== action.payload); // id?
    default:
      return state;
  }
};

//context provider
export const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, { notes: null }); //reducer, initialValue

  return (
    <NotesContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
