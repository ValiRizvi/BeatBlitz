const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID; 
const REDIRECT_URL = 'http://localhost:5173/callback';

const SpotifyAuth = () => {
    
    const loginURL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URL}&scope=playlist-read-private user-read-private user-library-read`

    return (
        <div>
            <h1>Login with Spotify</h1>
            <a href={loginURL}>
                <button>Login with Spotify</button>
            </a>
        </div>
    );
};

export default SpotifyAuth;