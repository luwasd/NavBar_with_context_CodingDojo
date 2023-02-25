import React from 'react'
import FormWrapper from './components/FormWrapper';
import NavBar from './components/NavBar';
import Wrapper from './components/Wrapper';
import './App.css'



const App = () => {

    return (
        <Wrapper>
            <NavBar />
            <FormWrapper />
        </Wrapper>
    )
}

export default App