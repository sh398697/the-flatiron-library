import React from "react";
import { useState } from "react";

function NewBookForm({ addBookToState}) {
  
  const [ newTitle, setTitle ] = useState( '' )
  const [ newAuthor, setAuthor ] = useState( '' )
  const [ newGenre, setGenre ] = useState( '' )
  const [ newYear, setYear ] = useState( '' )
  const [ newImage, setImage ] = useState( '' )
  const [ newReview, setReview ] = useState( '' )

  const handleTitle = e => setTitle( e.target.value )
  const handleAuthor = e => setAuthor( e.target.value )
  const handleGenre = e => setGenre( e.target.value )
  const handleYear = e => setYear( e.target.value )
  const handleImage = e => setImage( e.target.value )
  const handleReview = e => setReview( e.target.value )
  
  const handleSubmit = e => {
    e.preventDefault()

    const newBook = {
      title: newTitle,
      author: newAuthor,
      genre: newGenre,
      year: newYear,
      image: newImage,
      review: newReview,
      owner: ""
    }

    fetch( `${process.env.REACT_APP_API_URL}/books`, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( newBook )
    } )
      .then( r => r.json() )
      .then( addBookToState )
    e.target.reset()
  }
  
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
      <h1 className="text-2xl py-4 font-bold">New Book</h1>
      <form onSubmit={ handleSubmit } >
      <div className="flex justify-center px-2 py-1"><input className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"onChange={ handleTitle } type="text" name="title" 
        placeholder="Book title..." /></div>
        <div className="flex justify-center px-2 py-1"><input className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"onChange={ handleAuthor } type="text" name="author" 
        placeholder="Author name..." /></div>
        <div className="flex justify-center px-2 py-1"><input className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"onChange={ handleGenre } type="text" name="genre" 
        placeholder="Genre..." /></div>
        <div className="flex justify-center px-2 py-1"><input className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"onChange={ handleYear } type="text" name="year" 
        placeholder="Year published..." /></div>
        <div className="flex justify-center px-2 py-1"><input className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"onChange={ handleImage } type="text" name="image"
        placeholder="Image URL..." /></div>
        <div className="flex justify-center px-2 py-1"><input className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2" onChange={ handleReview } type="text" name="review" 
        placeholder="Your review..." /></div>
      <div className="flex justify-center px-2 py-3"><button type="submit">Add Book</button></div>
    </form>
  </div>
    );
}

export default NewBookForm;