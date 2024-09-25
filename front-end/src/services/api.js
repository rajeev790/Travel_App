const API_URL = 'http://localhost:8000/api';

export const fetchHotels = async () => {
    const response = await fetch(`${API_URL}/hotels/`);
    return response.json();
};

export const fetchRestaurants = async () => {
    const response = await fetch(`${API_URL}/restaurants/`);
    return response.json();
};

export const fetchTouristSpots = async () => {
    const response = await fetch(`${API_URL}/tourist-spots/`);
    return response.json();
};

export const searchItems = async (query) => {
    const response = await fetch(`${API_URL}/search/?query=${query}`);
    return response.json();
};

export const fetchHotelDetails = async (id) => {
    const response = await fetch(`${API_URL}/hotels/${id}/`);
    return response.json();
};

export const fetchUserProfile = async () => {
    const response = await fetch(`${API_URL}/profile/`);
    return response.json();
};
