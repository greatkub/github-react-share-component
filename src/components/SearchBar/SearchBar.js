import React, { useState } from "react"
import "./SearchBar.css"

function SearchBar(props) {
    const [searchValue, setSearchValue] = useState("")

    function handleInputChange(event) {
        setSearchValue(event.target.value)
    }

    // function handleClearClick() {
    //     setSearchValue("")
    // }

    const filteredRooms = props.rooms.filter((room) => {
        return room.includes(searchValue)
    })
    return (
        <div>
            <input type="text" value={searchValue} onChange= {handleInputChange}></input>
            <ul>
                {filteredRooms.map((room) => {
                    return <li key={room}>{room}</li>
                })}
            </ul>
            
        </div> 
    )
}

export default SearchBar
