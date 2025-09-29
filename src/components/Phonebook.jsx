const Phonebook = ({
  persons,
  filter,
  newName,
  newNumber,
  onFilterChange,
  onNameChange,
  onNumberChange,
  onAddPerson,
  ondeleteperson
}) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <div>
        filter shown with: 
        <input value={filter} onChange={onFilterChange} />
      </div>

      <h3>Add a new</h3>
      <form onSubmit={onAddPerson}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>


      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name}  {person.number}
            <button onClick={() => ondeleteperson(person.id)}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Phonebook