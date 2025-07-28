import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-789' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
    
  const addName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      return
  }

    if (newName === '') {
      alert(`you cannot add an empty name`)
      return
    }

    const nameObject  = {
      name: newName,
      number: newNumber
    }
    
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const logPersons = () => {
    persons.forEach((person, index) => {
      console.log(index, person.name, person.number)
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div> name:  <input value={newName} onChange={handleNameChange} /> </div>
        <div> number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <button onClick={logPersons}>Console logi</button>

      <h2>Names</h2>
      <ul>
        {persons.map((person, index) => {
          return <li key={index}>{person.name} {person.number}</li>
        })}
      </ul>
    </div>
  )
}

export default App