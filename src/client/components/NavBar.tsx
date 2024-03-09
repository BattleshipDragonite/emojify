import React from "react";
import { Button } from "flowbite-react";
import logo from '../assets/EmojifyLogo.svg'
import { useNavigate } from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate()
    const signout = () => {
        // Add sign out functionality here
        console.log('Sign out')
        navigate('/')
    }

    return (
        <div className="navbar">
            <img src={logo} width='40px'/>
            <Button onClick={() => signout()} gradientDuoTone="tealToLime">Sign out</Button>
        </div>
    )
}

export default NavBar