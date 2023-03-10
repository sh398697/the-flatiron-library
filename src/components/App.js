import React from "react";
import { useState } from "react";

function App() {
  
  const [books, setBooks] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  const addBookToState = bookObj => {
    setBooks( [ ...books, bookObj ] )
  }


  function checkOutBook(book) {

    const updatedBooks = books.map(bookObj => {
      if ((bookObj.id) === (book.id)) {
        bookObj.owner = currentUser;
        return bookObj;
      } else {
        return bookObj;
      }
    });

     fetch(`https://json-server-template-4sub.onrender.com/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          owner: currentUser
      }),
      });
      
      setBooks(updatedBooks);
  }

  function returnBook(book) {
    
    const updatedBooks = books.map(bookObj => {
      if ((bookObj.owner === currentUser) && (currentUser !== "") && (bookObj.id === book.id)) {
        console.log('Changing the owner in upDatedBooks');
        console.log(bookObj.owner);
        console.log(currentUser);
        bookObj.owner = "";
        return bookObj;
      } else {
        return bookObj;
      }
    });

     fetch(`https://json-server-template-4sub.onrender.com/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          owner: ""
      }),
      });
      
      setBooks(updatedBooks);
  }

  return (
    <div>       
      <h1>Hello World</h1>
    </div>
    );
}

export default App;
