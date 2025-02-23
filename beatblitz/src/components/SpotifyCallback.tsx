import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SpotifyCallback = () => {

    const navigate = useNavigate();

    useEffect(() => {
        // the users spotify access token is needed for api calls on their behalf
        // extract it from the callback url and store in local storage

        const hash = window.location.hash;  // return token in url after # 
        
        const fixedHash = hash.replace('#', '?');  // query parameters should start with ? so replace hashtag

        const params = new URLSearchParams(fixedHash);
        const token = params.get('access_token')?.trim();;
        
        console.log(token)
        console.log('Token type:', typeof token);
        if (token) {
            localStorage.setItem('spotify_token', token);  // localStorage stores data in the users browser 
            navigate('/');  // redirect to home page
        } else {
            console.error('Failed to get access token.');
        };
    }, []);

    return <h1>Logging in...</h1>;
};

export default SpotifyCallback;