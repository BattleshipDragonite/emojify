import React, {useState} from 'react'
import { Button } from 'flowbite-react'
import {genresMap} from '../../server/utils/emojiDict.ts'

const EmojifyPage = () => {
    const [genre, setGenre] = useState('🎼')

    const genres = Object.keys(genresMap)


return (
    <div className='flex flex-col align-middle'>
    <h1>Emojify Page</h1>
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
    </div>
    )
}

export default EmojifyPage