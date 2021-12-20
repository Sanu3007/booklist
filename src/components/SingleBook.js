import React from "react";

const SingleBook = ({ book }) => {
  return (
    <div>
      <h1>Book Info</h1>
      <div>
        <h3>Book Name: {book.book_title}</h3>
        <img src={book.image} />
        <h3>Author :{book.author}</h3>
      </div>
    </div>
  );
};

export default SingleBook;
