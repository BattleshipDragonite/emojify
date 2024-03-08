import React from "react";
import { Button } from "flowbite-react";


const NavBar = () => {

    const signout = () => {
        // Add sign out functionality here
        console.log('Sign out')
    }

    return (
        <div className="flex justify-between p-3 m-0 bg-indigo-500">
            <h1>Emojify</h1>
            <Button onClick={() => signout()} color="purple">Sign out</Button>
        </div>
    )
}

export default NavBar