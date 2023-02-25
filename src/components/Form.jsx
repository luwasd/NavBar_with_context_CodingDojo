import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'

const Form = () => {

    const { setName } = useContext(MyContext);

    const HandleSubmit = (e) => {
        e.preventDefault();
        setName(e.target.name.value);
    }

    return (
        <div className='Form'>
            <form onSubmit={HandleSubmit}>
                <label htmlFor="name">Your Name: </label>
                <input type="text" id="name" />
                <input type="submit" value='Submit'/>
            </form>
        </div>
    )
}

export default Form