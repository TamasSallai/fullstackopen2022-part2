const Filter = ({ searchedName, handleSearch }) => (
  <div>
    filter shown with <input value={searchedName} onChange={handleSearch} />
  </div>
)

export default Filter
