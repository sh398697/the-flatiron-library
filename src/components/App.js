import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import MyBooks from "./MyBooks";
import HomePage from "./HomePage";
import About from "./About";
import NewBookForm from "./NewBookForm";

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

     fetch(`${process.env.REACT_APP_API_URL}/books/${book.id}`, {
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

     fetch(`${process.env.REACT_APP_API_URL}/books/${book.id}`, {
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
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
          <Route exact path="/mybooks">
        <MyBooks books={books} setBooks={setBooks} currentUser={currentUser} returnBook={returnBook}/>
        </Route>
        <Route exact path="/newbook">
          <NewBookForm addBookToState={addBookToState}/>
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <HomePage books={books} setBooks={setBooks} currentUser={currentUser} checkOutBook={checkOutBook} />
        </Route>
      </Switch>
    </div>
    );
}

export default App;
