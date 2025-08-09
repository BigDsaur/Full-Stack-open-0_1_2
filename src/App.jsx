import { useState } from 'react'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
 
  const [newName, setNewName] = useState('')
  const [filter, setFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()

    const nameExists = persons.some(person => person.name === newName)
    if (nameExists) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    const nameObject = { name: newName }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  setTimeout(() => {
  console.log('loop..')
  let i = 0
  while (i < 99) {
    i++
    console.log(i)
  }
  console.log('end')
}, 5000)

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook
        persons={persons}
        newName={newName}
        filter={filter}
        onNameChange={(e) => setNewName(e.target.value)}
        onFilterChange={(e) => setFilter(e.target.value)}
        onAddName={addName}
      />
    </div>
  )
}

export default App