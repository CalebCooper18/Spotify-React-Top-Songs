import { useEffect, useState } from 'react';
// import useFetch from './hooks/useFetch';
import Card  from "./components/Card";
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';


function App() {

  const CLINET_ID = '03aeaded767a49b483a3fb235cc3a196'
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = 'token';
  const SCOPE = 'user-read-private user-read-email user-read-playback-state user-modify-playback-state user-read-recently-played user-top-read';

  const [token, setToken] = useState(null);
  const [options, setOptions] = useState(null);
  const [trackData, setTrackData] = useState(null);
  const [artistsData, setArtistsData] = useState(null);
  const [timePeriod, setTimePeriod] = useState("medium_term");

  let urlTracks = `https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=${timePeriod}`;
  let urlArtists = `https://api.spotify.com/v1/me/top/artists?limit=5&time_range=${timePeriod}`;

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
    setArtistsData(null);
    setTrackData(null);
    window.localStorage.removeItem('token');
  }

  useEffect(() => {
    if(token)
    {
      setOptions({
        method: 'GET',
        headers:
        {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    }
  }, [token])

  

  async function test() 
  {
      try
      {
        const tracksRes = await fetch(urlTracks, options);
        const artistsRes = await fetch(urlArtists, options);
        const data1 = await tracksRes.json();
        const data2 = await artistsRes.json();
        setTrackData(data1);
        setArtistsData(data2);
      }
      catch(err)
      {
        console.error(err);
      }
      console.log(artistsData);
  }

  return (
    <div>
      <div className='flex flex-col h-screen bg-gray-600'>
        <Header/>
        <main className='flex-1 overflow-y-auto'>
        {!token && <a href={`${AUTH_ENDPOINT}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`}
        >Login Into Spotify</a>}
        <button onClick={logout}>Logout</button>
        <button onClick={() => setTimePeriod('long_term')}>Test me again</button>
        {token &&  <button onClick={test}>Test me</button>}
        <div className='grid gap-4 grid-cols-2'>
          <div className='shadow-xl rounded-md border border-gray-200 dark:border-gray-500 dark:bg-gray-600 m-4 col-span-full md:col-span-1'>
            <div className='py-2'>
              <div className='flex justify-center items-center border-b border-gray-200 mx-6 pb-2'>
                <p className='text-2xl'>Top Tracks:</p>
              </div>
              <ul class="grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-1">
                {trackData && trackData.items.map((item, i) => ((
                  <Card
                  key={i}
                  photo={item.album.images[1].url}
                  title={item.name}>
                  </Card>
                )))}
              </ul>
            </div>
          </div>
          <div className='flex flex-col'>
            {artistsData && artistsData.items.map((item, i) => ((
              <Card
              key={i}
              photo={item.images[1].url}
              title={item.name}>
              </Card>
            )))}
          </div>
        </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
