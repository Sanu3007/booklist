import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import ShowBookList from "./components/ShowBookList";
import SingleBook from "./components/SingleBook";

function App() {
  const [booklist, setBookList] = useState([]);
  const [book, setBook] = useState({});

  const fetchBookList = async () => {
    const res = await fetch("http://www.mocky.io/v2/5cc008de310000440a035fdf");
    const data = await res.json();
    setBookList(data.book_array);
  };

  useEffect(() => {
    fetchBookList();
  }, []);

  const selectBook = (e, book) => {
    e.preventDefault();
    setBook(book);
  };

  return (
    <div className="App">
      {Object.keys(book).length === 0 ? (
        <ShowBookList booklist={booklist} selectBook={selectBook} />
      ) : (
        <SingleBook book={book} />
      )}
    </div>
  );
}

export default App;
