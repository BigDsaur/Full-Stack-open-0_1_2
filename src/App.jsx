import { useState, useEffect } from 'react'
import axios from 'axios'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Fetch data on mount
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
      .catch(error => {
        console.error('Error fetching persons:', error)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const personObject = { 
      name: newName,
      number: newNumber,
      //id: (persons.length + 1).toString()
    }

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log('promise fulfilled')
      })
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook
        persons={persons}
        filter={filter}
        newName={newName}
        newNumber={newNumber}
        onFilterChange={(e) => setFilter(e.target.value)}
        onNameChange={(e) => setNewName(e.target.value)}
        onNumberChange={(e) => setNewNumber(e.target.value)}
        onAddPerson={addPerson}
      />
    </div>
  )
}



export default App