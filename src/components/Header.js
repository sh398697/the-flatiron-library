import React from "react";
import { NavLink } from "react-router-dom";


function Header({currentUser}) {

  return (
  <div className="w-screen h-[120px] z-10 bg-slate-600 justify-center items-center">
      <div className="justify-center items-center">
        <div><h1 className="text-3xl font-bold sm:text-4xl text-white mx-auto pt-6"><NavLink to="/" exact>Flation Library</NavLink></h1></div>
        <div className="pl-24">{((currentUser === "") ? (<NavLink to="/login" exact><span className="text-white text-base pt-4 p-3"></span></NavLink>) : (<span className="text-white text-base pl-3">Welcome, {currentUser}</span>))}</div>

        <ul className="flex flex-initial h-[95px] z-10 bg-slate-600 items-center justify-center mx-auto">
          <NavLink to="/" exact className="flex-initial w-48"><li>Home</li></NavLink>
          <NavLink to="/login" exact className="flex-initial w-48"><li>My Account</li></NavLink>
          <NavLink to="/mybooks" exact className="flex-initial w-48"><li>My Books</li></NavLink>
          <NavLink to="/newbook" exact className="flex-initial w-48"><li>Add a Book</li></NavLink>
          <NavLink to="/about" exact className="flex-initial w-48"><li>About Us</li></NavLink>
       </ul>
      </div>
  </div>
  );
}

export default Header;
