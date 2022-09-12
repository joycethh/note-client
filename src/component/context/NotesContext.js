import { createContext, useReducer } from "react";

//create notes context
export const NotesContext = createContext();

//create note reducer
export const noteReducer = (state = { isLoading: true, notes: [] }, action) => {
  switch (action.type) {
    case "START-LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "END-LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "FETCH":
      return {
        notes: action.payload,
      };
    case "CREATE":
      return {
        notes: [action.payload, ...state.notes], //console.log the state, it will contain notes object
      };
    case "DELETE":
      return {
        notes: state.notes.filter((note) => note._id !== action.payload),
      }; // backend send seleted note id as data directly
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
