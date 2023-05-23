import './css/TodoSearch.css'

function TodoSearch({
    searchValue, 
    setSearchValue,
}){
    return (
        <>
            <input 
                type="text"
                placeholder="Cortar cebolla"
                value={searchValue}
                onChange={
                    (event) => {
                        setSearchValue(event.target.value)
                    }
                }
            >
            
            </input>
        </>
    )
}

export { TodoSearch }