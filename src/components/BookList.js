import React from "react";
import BookCard from "./BookCard";

function BookList({books, removeBookFromState, currentUser, checkOutBook}) {
  
  const bookCardsArray = books.map( bookObj => {
    return <BookCard key={bookObj.id} book={bookObj} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} />  
  } )
  
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid gap-4 2xl:grid-cols-6 2xl:gap-4 xl:grid-cols-5 xl:gap-4 lg:grid-cols-4 lg:gap-4 md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-4">{bookCardsArray}</div>
      </div>
    </section>
    );
}

export default BookList;