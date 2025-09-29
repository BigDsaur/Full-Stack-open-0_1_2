import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import personservice from './services/person';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // Fetch data on mount
  useEffect(() => {
    console.log('effect')
    personservice
      .getAll()
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
    }

    personservice
      .create(personObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      })
    }
  const deleteperson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    if (!personToDelete) return

    const ok = window.confirm(`Delete ${personToDelete.name}?`)
    if (!ok) return


  personservice
    .remove(id)
    .then(() => {
      setPersons(prev => prev.filter(p => p.id !== id))
    })
    .catch(error => {
      console.log('Error deleting', error);
      alert("Error deleting person")
    })
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
        ondeleteperson={deleteperson}
      />
    </div>
  )
}

export default App