import React, { useState, useEffect } from 'react'
import CountryMan from './CountryMan';
import Countries from './Countries';

const App = () => {
    const [countries, setCountries] = useState([])
    const [searchName, setSearchName] = useState('')

    const hook = () => {
        CountryMan.getAll()
            .then(response => {
                console.log('promise fulfilled')
                setCountries(response.data)
            })
    }

    useEffect(hook, [])

    const handleSearchChange = (event) => {
        setSearchName(event.target.value)
    }

    const bev = (props) => {
        setSearchName(props.name)
    }

    return (
        <div>
            <Filter event={handleSearchChange} inpVal={searchName} />
            <Countries buttonHandler={bev} ctrs={countries} filter={searchName} />
        </div>
    )

}

const Filter = (props) => {
    return (
        <div>
            find countries  <InputField val={props.inpVal} event={props.event} />
        </div>
    )
}

const InputField = (props) => {
    return (
        <>
            <input value={props.val} onChange={props.event} />
        </>
    )
}

export default App