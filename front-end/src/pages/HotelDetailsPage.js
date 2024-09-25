import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHotelDetails } from '../services/api';
import '../styles/components.css';

const HotelDetailsPage = () => {
    const [hotel, setHotel] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getHotelDetails = async () => {
            const data = await fetchHotelDetails(id);
            setHotel(data);
        };

        getHotelDetails();
    }, [id]);

    return (
        <div className="hotel-details-page">
            {hotel ? (
                <>
                    <h1>{hotel.name}</h1>
                    <p>{hotel.description}</p>
                    <p>{hotel.address}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default HotelDetailsPage;
