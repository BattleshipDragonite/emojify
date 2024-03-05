import React from 'react'
import { Kbd } from 'flowbite-react'

import MetricsMixer from '../../components/MetricsMixer'

const EmojifyPage = () => {
    const emojis = []
    return (
        <>
            <h1>Emojify Page</h1>
            <div id='user-interface'>
                <Kbd>😀</Kbd>
                <MetricsMixer />
            </div>
        </>
    )
}

export default EmojifyPage