import React, { useEffect, useState } from 'react';
import { fetchHotels } from '../services/api';
import '../styles/components.css';

const HotelList = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const getHotels = async () => {
            const data = await fetchHotels();
            setHotels(data);
        };

        getHotels();
    }, []);

    return (
        <div className="hotel-list">
            <h2>Hotels</h2>
            <ul>
                {hotels.map((hotel) => (
                    <li key={hotel.id}>{hotel.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HotelList;
