import React from "react";
import { Button } from "flowbite-react";


const NavBar = () => {

    const signout = () => {
        // Add sign out functionality here
        console.log('Sign out')
    }

    return (
        <div className="flex justify-between m-3">
            <h1>Emojify</h1>
            <Button onClick={() => signout()} color="purple">Sign out</Button>
        </div>
    )
}

export default NavBar