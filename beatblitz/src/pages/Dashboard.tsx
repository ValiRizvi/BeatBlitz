import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {

    const [user, setUser] = useState<any>(null);
    const token = localStorage.getItem('spotify_token');

    useEffect(() => {

        if (!token) return;
        
        axios.get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => setUser(response.data))
        .catch(error => console.error(`error getting user data: ${error}`));

    }, [token]);

    return (
        <div>

            <h1>Beat Blitz</h1>

            {user ? (
                <div>
                    <h2>{user.display_name}</h2>
                    <img src={user.images?.[0]?.url} />
                    <p>Spotify ID: {user.id}</p>
                </div>
            ) : (
                <p>loading user data...</p>
            )}

        </div>
    );
};

export default Dashboard;