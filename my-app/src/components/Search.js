import React from 'react'

function SearchForm(props) {
    return (
        <form className="search">
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                Search
            </button>
        </form>
    ); 
}

export default SearchForm;