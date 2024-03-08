import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import EmojifyPage from './pages/EmojifyPage.tsx'

const App = () => {


    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/homepage' element={<EmojifyPage />} />
        </Routes>

    )
}

export default App