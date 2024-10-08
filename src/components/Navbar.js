import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext.js'

const Navbar = () => {

    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try{
            await logOut()
        }
        catch(error){
            console.log("error");
        }
    }

    return(
    <div className='position:absolute; justify-between p-4 bg-gray-200 w-full p-4'>
        <h1 className="text-center text-2xl font-bold">
            Firebase Google Auth & Context
        </h1>
        {user?.displayName ? ( <button onClick = { handleSignOut}>Logout</button> ) : (<Link to='/signin'>Sign In</Link>)}
    </div>
    );
}

export default Navbar