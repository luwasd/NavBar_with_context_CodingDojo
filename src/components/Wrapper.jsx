import React, { useState } from 'react'
import { MyContext } from '../Context/MyContext'

const Wrapper = ({children}) => {

    const [name, setName] = useState('');

    return (
        <MyContext.Provider value={{name, setName}}>
            {children}
        </MyContext.Provider>
    )
}

export default Wrapper