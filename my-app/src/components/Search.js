import React from 'react'
      const SearchName = () => {
        return (
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
        );
      }
      export default SearchName;