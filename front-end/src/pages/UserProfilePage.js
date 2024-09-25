import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../services/api';
import '../styles/components.css';

const UserProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            const data = await fetchUserProfile();
            setProfile(data);
        };

        getProfile();
    }, []);

    return (
        <div className="user-profile-page">
            {profile ? (
                <>
                    <h1>{profile.name}</h1>
                    <p>Email: {profile.email}</p>
                    <p>Joined: {profile.joinedDate}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfilePage;
