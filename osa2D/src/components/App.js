import React, { useState, useEffect } from 'react'
import Numbers from './Numbers'
import personService from '../services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [searchName, setSearchName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [messageBox, setMessage] = useState(null)

    const hook = () => {
        personService.getAll()
            .then(response => {
                console.log('promise fulfilled')
                console.log(response.data)
                setPersons(response.data)
            })
    }

    useEffect(hook, [])

    const rem = (props) => {
        console.log(props)
        personService.delete(props.id)
            .then(res => { hook(); })
            .then(res => {
                console.log(props)
                setMessage(`Removed ${props.name}`);
                setTimeout(() => { setMessage(null) }, 3000)
            })
    }

    const addNewName = (event) => {
        event.preventDefault()
        console.log('nappia painettu', event.target)

        const newp = {
            name: newName,
            number: newNumber
        }

        if (persons.filter(i => i.name === newp.name).length > 0) {
            alert(`person ${newName} is already on the list`)
        } else {
            personService.create(newp)
                .then(res => { hook(); })
                .then(res => {
                    setMessage(`Added ${newName}`);
                    setTimeout(() => { setMessage(null) }, 3000)
                })
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleSearchChange = (event) => {
        setSearchName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Notification message={messageBox} />
            <Filter event={handleSearchChange} inpVal={searchName} />
            <h3>lisää uusi</h3>

            <AddPersonForm
                addNewName={addNewName}
                handleNameChange={handleNameChange} newName={newName}
                handleNumberChange={handleNumberChange} newNumber={newNumber} />

            <h2>Numerot</h2>
            <Numbers ppl={persons} searchName={searchName} rem={rem} />
        </div>
    )
}

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="message">
            {message}
        </div>
    )
}

const AddPersonForm = (props) => {
    return (
        <form onSubmit={props.addNewName}>
            <div>
                nimi: <InputField event={props.handleNameChange} value={props.newName} />
            </div>
            <div>
                numero: <InputField value={props.newNumber} event={props.handleNumberChange} />
            </div>
            <div>
                <button type="submit">lisää</button>
            </div>
        </form>
    )
}

const Filter = (props) => {
    return (
        <div>
            rajaa naitettavia: <InputField val={props.inpVal} event={props.event} />
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