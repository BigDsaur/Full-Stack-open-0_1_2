import { useState, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import Notification from './components/Notification'
import personservice from './services/person';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState({ message: null, type: '' })

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
        showNotification('Failed to fetch persons', 'error')
      })
  }, [])

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification({ message: null, type: '' })
    }, 3000) // lasts 3 seconds
  }

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
        setPersons(prev => prev.concat(response.data)) // response.data has real id
        setNewName('')
        setNewNumber('')
        showNotification(`Added ${response.data.name}`, 'success')
      })
      .catch(() => {
        showNotification('Error adding person', 'error')
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
      showNotification(`Deleted ${personToDelete.name}`, 'success')
    })
    .catch(() => {
        showNotification(`Failed to delete ${personToDelete.name}`, 'error')
      })
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
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