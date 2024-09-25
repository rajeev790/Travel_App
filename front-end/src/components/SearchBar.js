import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/components.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/search-results?query=${query}`);
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
