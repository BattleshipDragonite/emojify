import React from 'react'
import Background from '../assets/28011782_7301421.svg'
import Logo from '../assets/EmojifyLogo.svg'
import Text from '../assets/Text.svg'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
    const navigate = useNavigate();
    const signIn = () => {
        window.location.href = "http://localhost:3000/login"

    }
    return (
        <>
            <div style={{ backgroundImage: `url(${Background})`, height: '100vh', width: '100vw', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='flex flex-col min-h-screen justify-center items-center'>
                    {/* <h1>Click to sign in to Spotify</h1> */}
                    <img onClick={() => signIn()} className="logo" src={Logo} width='700em' />
                    <img className="text" src={Text} width='600em' />
                </div>
            </div>
        </>
    )
}

export default LandingPage
