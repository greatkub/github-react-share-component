import React from "react"
import SearchBar from './SearchBar/SearchBar'


const rooms =[
    "King David room 112 floor 1 Great", 
    "King David room 122 floor 2 Jame", 
    "Queen Vv room 112 floor 3 My", 
    "Queen Vv room 132 floor 3 Zhang", 
    "Solomon DD room 212 floor 4 Not",
    "Solomon DD room 412 floor 5 Kain"
]

function App() {
    return(
        <div>
            <SearchBar rooms={rooms} />
        </div>
    )
}

export default App
