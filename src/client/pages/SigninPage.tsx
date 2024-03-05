import React from 'react'
import { Button } from 'flowbite-react'
import axios from 'axios';

const SigninPage = () => {

    function spotifyAuth() {
        // Fetch spotify callback URI here
        // http://localhost:3000/login
        console.log('signed in')
        
    }

    return (
        <div className='flex flex-col justify-items-center'>
            <h1 className='text-5xl fond-bold underline'>Sign in page</h1>
            <Button onClick={() => spotifyAuth()}>Sign in to Spotify</Button>
        </div>
    )
}

export default SigninPage