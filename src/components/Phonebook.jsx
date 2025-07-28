const Phonebook = ({
  persons,
  newName,
  filter,
  onNameChange,
  onFilterChange,
  onAddName
}) => {
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <div>
        filter shown with: <input value={filter} onChange={onFilterChange} />
      </div>

      <form onSubmit={onAddName}>
        <div>
          name: <input value={newName} onChange={onNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Names</h2>
      <ul>
        {filteredPersons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Phonebook