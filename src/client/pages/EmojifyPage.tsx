import React, {useState} from 'react'
import MetricsMixer from '../../components/MetricsMixer'
import {genresMap} from '../../server/utils/emojiDict.ts'

const EmojifyPage = () => {
    const [genre, setGenre] = useState('🎼')

    const genres = Object.keys(genresMap)


return (
    <div id='user-interface'>
    <div className='genre-div'>
        <h1 className='text-8xl m-20'>{genre}</h1>
    </div>
    <div className="keyboard">
        <div className="flex">
        {genres.slice(0, 13).map((ele) => {
            return (
                <>
                <div className='keys' onClick={() => setGenre(ele)}>
                    <h1>{ele}</h1>
                </div>
                </>
            )
        })}
        </div>
        <div className="flex">
        {genres.slice(13, 22).map((ele) => {
            return (
                <>
                <div className='keys' onClick={() => setGenre(ele)}>
                    <h1>{ele}</h1>
                </div>
                </>
            )
        })}
        </div>
        <div className="flex">
        {genres.slice(22).map((ele) => {
            return (
                <>
                <div className='keys' onClick={() => setGenre(ele)}>
                    <h1>{ele}</h1>
                </div>
                </>
            )
        })}
        </div>

    </div>
    <MetricsMixer />
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-purple-700 rounded-lg border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Search
    </button>
    </div>
    )
}

export default EmojifyPage