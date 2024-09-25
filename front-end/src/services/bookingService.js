const API_URL = 'http://localhost:8000/api';

export const bookHotel = async (hotelId, userId) => {
    const response = await fetch(`${API_URL}/bookings/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hotelId, userId }),
    });
    if (!response.ok) {
        throw new Error('Booking failed');
    }
    return response.json();
};
