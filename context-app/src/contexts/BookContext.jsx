import React, { createContext, useState } from "react";

export const BookContext = createContext()

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", id: 1 },
    { title: "Way of the Kings", id: 2 },
    { title: "The Final Empire", id: 3 },
    { title: "The hero of Ages", id: 4 }
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
