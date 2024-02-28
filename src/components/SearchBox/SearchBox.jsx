import React, { useState } from 'react'

export function SearchBox({ onSearch }) {
    const [inputValue, setInputValue] = useState('')

    const handleOnInputValueChange = (e) => {
        const { value } = e.target
        setInputValue(value)
    }
    const handleOnonSearch = () => {
        onSearch(inputValue)
    }
    return (
        <div className="serachBox">
            <input type="text" placeholder='Search Movies' value={inputValue} onChange={handleOnInputValueChange} />
            <button type='button' onClick={handleOnonSearch} disabled={!inputValue}
            >Search</button>
        </div>
    )
}
