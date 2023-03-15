import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import BookList from "./BookList";

function HomePage({books, setBooks, currentUser, checkOutBook}) {

  function removeBookFromState(bookID) {
    
    const filteredArray = books.filter(book => {
      return (book.id !== bookID)
    })
    setBooks(filteredArray)
  }

  const [ searchTerm, setSearchTerm ] = useState( '' )

  const changeSearchTerm = newString => setSearchTerm( newString.toLowerCase() )

  const byKeyword = bookObj => {
    if(( bookObj.title.toLowerCase().includes( searchTerm ) ) || ( bookObj.author.toLowerCase().includes( searchTerm ) ) || ( bookObj.genre.toLowerCase().includes( searchTerm ) ) ) {
      return true
    }
  }

  const searchedBooks = books.filter( byKeyword )

  useEffect( () => {
    fetch( `${process.env.REACT_APP_API_URL}/books/` )
      .then( r => r.json() )
      .then( setBooks )
  }, [] )

  return (
      <div className="container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <Search changeSearchTerm={ changeSearchTerm } />
        <BookList books={searchedBooks} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} />
      </div>
    );
}

export default HomePage;

{/* <NewBookForm currentUser={currentUser} addBookToState={ addBookToState }/> */}