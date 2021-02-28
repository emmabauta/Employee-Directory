import React from 'react'
      const SearchName = () => {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="searchbox">
            <div className="input-group">
                <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Name"
                aria-label="Search"
              />
              </div>
          </div>
        </nav>
        );
      }
      export default SearchName;