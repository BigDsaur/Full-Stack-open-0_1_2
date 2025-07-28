import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
    
  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject  = { name: newName }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const logPersons = () => {
    persons.forEach((person, index) => {
      console.log(index, person.name)
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name:  <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <button onClick={logPersons}>Console logi</button>

      <h2>Names</h2>
      <ul>
        {persons.map((person, index) => {
          return <li key={index}>{person.name}</li>
        })}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App