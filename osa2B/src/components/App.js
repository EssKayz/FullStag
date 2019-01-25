import React, { useState } from 'react'
import Numbers from './Numbers'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
    ])
    const [newName, setNewName] = useState('')
    const [searchName, setSearchName] = useState('')
    const [newNumber, setNewNumber] = useState('')

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
            setPersons(persons.concat(newp))
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
            <Filter event={handleSearchChange} inpVal={searchName} />

            <h2>Puhelinluettelo</h2>
            <h3>lisää uusi</h3>
            <AddPersonForm 
                addNewName={addNewName} 
                    handleNameChange={handleNameChange} newName={newName}
                    handleNumberChange={handleNumberChange} newNumber={newNumber} />
            <h2>Numerot</h2>
            <Numbers ppl={persons} searchName={searchName} />
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