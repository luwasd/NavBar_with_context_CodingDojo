import React, {useContext} from 'react'
import { MyContext } from '../Context/MyContext'

const NavBar = () => {

    const { name } = useContext(MyContext);

    return (
        <div className='NavBar'>
            <h1>Hi {name}!</h1>
        </div>
    )
}

export default NavBar