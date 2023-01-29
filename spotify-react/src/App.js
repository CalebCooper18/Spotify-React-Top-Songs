import { useEffect, useState } from 'react';
import Card  from "./components/Card";
import './index.css';


function App() {

  const CLINET_ID = '03aeaded767a49b483a3fb235cc3a196'
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = 'token';
  const SCOPE = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read';


  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');

    if(!token && hash)
    {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem('token', token);

    }

    setToken(token);
  }, [])

  function logout()
  {
    setToken(null);
    window.localStorage.removeItem('token');
  }


  async function test()
  {
    try {
    const res = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=50', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    const data = await res.json();
    setData(data);
    
    console.log(data);
  }
  catch (err)
  {
    console.error(err.message);
  }
  }


  return (
    <div>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`}
      >Login Into Spotify</a>
      <button onClick={test}>Click me</button>
      <button onClick={logout}>Logout</button>
      {data && data.items.map((item, i) => ((
        <Card
        key={i}
        albumCover={item.album.images[1].url}
        songName={item.name}>
        </Card>
      )))}
      </div>
  );
}

export default App;
