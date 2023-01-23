function Search({searchText,setSearchText}) {

  return (
    <div>
      <input value={searchText} onChange={(e) => setSearchText(e.target.value) } />
      <button>Найти</button>
    </div>
  )
}
export default Search