import React, { useEffect, useState } from 'react';
import { fetchTouristSpots } from '../services/api';
import '../styles/components.css';

const TouristSpotList = () => {
    const [touristSpots, setTouristSpots] = useState([]);

    useEffect(() => {
        const getTouristSpots = async () => {
            const data = await fetchTouristSpots();
            setTouristSpots(data);
        };

        getTouristSpots();
    }, []);

    return (
        <div className="tourist-spot-list">
            <h2>Tourist Spots</h2>
            <ul>
                {touristSpots.map((spot) => (
                    <li key={spot.id}>{spot.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TouristSpotList;
