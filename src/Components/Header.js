import React from 'react'
import SearchBar from './SearchBar'


export default function Header() {
    
    return(
        <nav className="w3-panel w3-black header-bar">
            <header className="w3-center w3-text-white">
               <SearchBar />
            </header>
        </nav>
    )
}


