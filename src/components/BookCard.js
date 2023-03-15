import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


function BookCard({book, removeBookFromState, currentUser, checkOutBook, isMyBooks, handleReturnBookClick}) {

  const [detailToggle, setDetailToggle] = useState(false)

  function bookDetailToggle(){
    setDetailToggle(!detailToggle)
  }

  function handleDelete(id) {
    fetch(`${process.env.REACT_APP_API_URL}/books/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
      .then(r => r.json())
      .then(() => removeBookFromState(id)      )
  }

  function handleCheckOutClick() {
    //Update book to owner=currentUser
    checkOutBook(book);
  }

  const isLoggedIn = currentUser;

  return (
      <div className="bg-white p-4 rounded-lg rounded-tl-[70px]
       w-full max-w-[240px] mx-auto my-2 cursor-pointer hover:scale-105 duration-200">
        { detailToggle ? (null) : <img className='mx-auto max-w-[200px] max-h-[300px] rounded-lg rounded-tl-[50px]' src={book.image} alt={book.title} onClick={bookDetailToggle}/>}     
         <div className= "flex gap-x-1 text-xs">
            { detailToggle ? (
              <div className="p-4 max-w-[240px] cursor-pointer text-xs h-[300px]" onClick={bookDetailToggle}>
                <div>Title:{book.title}</div>
                <div>Author: {book.author}</div>
                <div>Genre: {book.genre}</div> 
                <div>Published: {book.year}</div>
                <div className="font-bold text-2l pt-4">Review: {book.review}</div>
            </div>) : null}
          </div>

          {(isMyBooks) ? (
            <div className="flex items-center justify-center" key={book.id}>
                <button className="flex items-center justify-center" onClick={() => handleReturnBookClick(book)}>Return Book</button></div>) : (<div className="flex items-center justify-center" > 
                { book.owner ? (<div className="flex items-center justify-center" >Checked out to: {book.owner}</div>) : (null)} 
                { (isLoggedIn && !book.owner) ? (<div className="flex items-center justify-center"><button className="flex items-center justify-center" onClick={handleCheckOutClick}>Check Me Out</button></div>) : (null)}
                { (!isLoggedIn && !book.owner) ? (<div className="flex items-center justify-center" ><button className="flex items-center justify-center"><NavLink to="/login" exact className="flex items-center justify-center">Login to Check Out</NavLink></button></div>) : (null)}
                </div>)}
              <div>{currentUser === "admin" ? (<div className="flex items-center justify-center"><button className="flex items-center justify-center" type="button" onClick={()=>handleDelete(book.id)}>Remove Book</button></div>) : (null)}</div>
      </div>
    );
}

export default BookCard;


