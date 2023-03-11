import React from "react";
import BookCard from "./BookCard";

function MyBooks({books, currentUser, returnBook, removeBookFromState, checkOutBook}) {
    
    const myBooks = books.filter(book => {
        if (book.owner === currentUser && currentUser !== "") {
            return book;
        } else {
            return false;
        }
    })

    const bookList = myBooks.map(book => {
        return (<BookCard key={book.id} book={book} removeBookFromState={removeBookFromState} currentUser={currentUser} checkOutBook={checkOutBook} isMyBooks={true} handleReturnBookClick={handleReturnBookClick}/>)
    })

    function handleReturnBookClick(book) {
        returnBook(book);
    }

    return (
    <div className="justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <h1 className="text-2xl py-5 font-bold">My Books</h1>
        { (myBooks.length > 0) ? (
            <div>
                <div className="flex justify-center px-2 py-1">Your checked out books:</div>
                <div className="grid px-2 py-1 md:grid-cols-3 lg:grid-cols-4 gap-4">{bookList}</div>
            </div>
          ) : (
            <div className="flex justify-center px-2 py-8">You have no books checked out</div>
          )}
    </div>
  );
}

export default MyBooks;