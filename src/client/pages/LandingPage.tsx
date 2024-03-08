import React from 'react'
import Background from '../assets/28011782_7301421.svg'
const LandingPage = () => {
return (
    <>
    <div style={{backgroundImage: `url(${Background})`, height:'100vh', width: '100vw', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
       <h1>Sign in</h1> 
    </div>
    </>
    )
}

export default LandingPage
