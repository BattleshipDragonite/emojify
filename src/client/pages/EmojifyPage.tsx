import React, {useState} from 'react'
import { Kbd } from 'flowbite-react'
import {genresMap} from '../../server/utils/emojiDict.ts'

const EmojifyPage = () => {
    const emojis = ['🪵', '🇳🇬', '🗿', '🧑‍🎤', '🌫️', '']
    const [genre, setGenre] = useState('🎼')

    const genres = Object.keys(genresMap)

    const Backspace = (searchWord) => {
        let backSpacedWord = searchWord.split('')
        backSpacedWord.pop()
        backSpacedWord.join()
        console.log(backSpacedWord)
        return backSpacedWord
    }

    const SearchFunction = () => {
        const emojiRegex = '/^(?:(?:\p{RI}\p{RI}|\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?(?:\u{200D}\p{Emoji}(?:\p{Emoji_Modifier}|\u{FE0F}\u{20E3}?|[\u{E0020}-\u{E007E}]+\u{E007F})?)*)|[\u{1f900}-\u{1f9ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}])+$/u';
    }

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