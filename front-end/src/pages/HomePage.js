import React from 'react';
import Navbar from '../components/Navbar';
import HotelList from '../components/HotelList';
import RestaurantList from '../components/RestaurantList';
import TouristSpotList from '../components/TouristSpotList';
import '../styles/components.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <Navbar />
            <h1>Welcome to the Travel App</h1>
            <HotelList />
            <RestaurantList />
            <TouristSpotList />
        </div>
    );
};

export default HomePage;
