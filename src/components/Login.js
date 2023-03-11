import React from "react";

function Login({currentUser, setCurrentUser}) {
    
    function handleLogoutClick(e) {
        setCurrentUser("");
    }

    function handleLoginClick(e) {
        setCurrentUser(e.target.username.value);
    }   

    return (
    <div className="justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10">
        <h1 className="text-2xl py-4 font-bold">Login:</h1>
        { currentUser ? (
            <div className="px-2 py-1">
                <span className="flex justify-center px-1 py-2">Logged-In as: </span>
                <span className="flex justify-center px-2 py-1">{currentUser}</span>
                <div className="flex justify-center px-2 py-3">
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>) : 
            (
            <form onSubmit={handleLoginClick}>
                <div className="flex justify-center px-2 py-1">
                    <input type="text" name="username" placeholder="Enter username..." id="username" className="px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
                      border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"></input>
                </div>
                <div className="flex justify-center px-2 py-3">
                    <button type="submit">Login</button>
                </div>
            </form>)}
    </div>
  );
}

export default Login;