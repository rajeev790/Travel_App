import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { searchItems } from '../services/api';
import '../styles/components.css';

const SearchResultsPage = () => {
    const [results, setResults] = useState([]);
    const query = new URLSearchParams(useLocation().search).get('query');

    useEffect(() => {
        const fetchResults = async () => {
            const data = await searchItems(query);
            setResults(data);
        };

        fetchResults();
    }, [query]);

    return (
        <div className="search-results-page">
            <h1>Search Results for "{query}"</h1>
            <ul>
                {results.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultsPage;
