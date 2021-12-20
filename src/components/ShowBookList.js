import React from "react";

const ShowBookList = ({ booklist, selectBook }) => {
  return (
    <div>
      <h1>Book List</h1>
      <ul className="links-container">
        {booklist.map((book) => {
          return (
            <li key={book.book_title} onClick={(e) => selectBook(e, book)}>
              <a href="">{book.book_title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowBookList;
