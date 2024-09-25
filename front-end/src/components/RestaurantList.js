import React, { useEffect, useState } from 'react';
import { fetchRestaurants } from '../services/api';
import '../styles/components.css';

const RestaurantList = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const getRestaurants = async () => {
            const data = await fetchRestaurants();
            setRestaurants(data);
        };

        getRestaurants();
    }, []);

    return (
        <div className="restaurant-list">
            <h2>Restaurants</h2>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RestaurantList;
