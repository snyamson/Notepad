import React, { createContext, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const [addedNote, setAddedNote] = useState(false);
  return (
    <NotesContext.Provider value={[notes, setNotes, addedNote, setAddedNote]}>
      {children}
    </NotesContext.Provider>
  );
};
