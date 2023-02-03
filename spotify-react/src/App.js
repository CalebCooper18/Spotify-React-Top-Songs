import { useEffect, useState } from 'react';
import { useAudioContext } from './hooks/useAudioContext';
import Card from "./components/Card";
import Header from './components/Header';
import Footer from './components/Footer';
import Select from './components/Select';

//TODO:Pop up for first time on site/If token has expired 
//Dark mode -- Need to look into how tailwind handles this
//Possible preview api for songs that spotify doesn't preview in their api 
//Overall Styling change
//Put client creds into a env file

import './index.css';
import Modal from './components/Modal';



function App() {

  const { setSongToPlay } = useAudioContext();

  const limitValues = ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50'];
  const timePeriodValues = [
  {title: 'Past Month', value: "short_term"},
  {title: 'Past 6 Months', value: "medium_term"},
  {title: 'All Time', value: "long_term"}
  ]

  const [token, setToken] = useState(null);
  const [lastLogin, setLastLogin] = useState(null);
  const [trackData, setTrackData] = useState(null);
  const [artistsData, setArtistsData] = useState(null);
  const [timePeriod, setTimePeriod] = useState("medium_term");
  const [limit, setLimit] = useState('25');

  let urlTracks = `https://api.spotify.com/v1/me/top/tracks?time_range=${timePeriod}&limit=${limit}`;
  let urlArtists = `https://api.spotify.com/v1/me/top/artists?time_range=${timePeriod}&limit=${limit}`;

  function logout() {
    setToken(null);
    setArtistsData(null);
    setTrackData(null);
    window.localStorage.removeItem('token');
  }

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    let lastLogin = window.localStorage.getItem('lastLogin');

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
      window.location.hash = ""
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('lastLogin', Date.now());

    }
      
      setToken(token);
      setLastLogin(lastLogin)
  }, [])

  useEffect(() => {
      if(lastLogin === null)
      {
        return
      }
      if((new Date() - lastLogin) / 1000 >= 3600)
      {
        logout();
      }
  }, [urlTracks, urlArtists, lastLogin])

  useEffect(() => {
    
    let timeDifference = (new Date() - lastLogin) / 1000;
    let token = window.localStorage.getItem('token')

    if (token && (timeDifference < 3600)) {
      try
      {
        fetch(urlTracks,
          {
            headers:
            {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => res.json())
          .then(data => setTrackData(data))
        fetch(urlArtists, {
          headers:
          {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setArtistsData(data);
          })
        }
        catch(err)
        {
          console.error(err.message)
        }
    }
  }, [urlTracks, urlArtists, lastLogin])

  return (
    <div>
      <div className='flex flex-col h-screen bg-gray-600'>
        <Header />
        <main className='flex-1 overflow-y-auto'>
          {!token && <Modal/>}
          <div className='grid grid-cols-1 md:grid-cols-2 justify-center m-0 p-4'>
            <div className='col-span-full'>
              <div className='shadow-xl rounded-md border border-gray-500 bg-gray-600 m-4 p-5'>
                <div className='flex justify-center align-center flex-col gap-3'>
                  <div className='flex flex-col'>
                    <label> 
                      <span className='text-white text-2xl mx-2 block'>Time Range:</span>
                      <Select 
                      defaultValue={timePeriod}
                      values={timePeriodValues}
                      changeURL={setTimePeriod} 
                      />
                    </label>
                  </div>
                  <div className='flex flex-col'>
                    <label>
                      <span className='text-white text-2xl mx-2 block'>Limit Amount:</span>
                    <Select
                    defaultValue={limit}
                    values={limitValues}
                    changeURL={setLimit}
                    />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='shadow-xl rounded-md border border-gray-200 border-gray-500 bg-gray-600 m-4 col-span-full md:col-span-1'>
              <div className='py-2'>
                <div className='flex justify-center items-center border-b border-gray-200 mx-6 my-3 pb-2'>
                  <p className='text-2xl md:text-4xl text-white'>Top Tracks:</p>
                </div>
                <ul className="grid grid-cols-1 gap-3 justify-center items-center mx-3 pt-1">
                  {trackData && trackData.items.map((item, i) => ((
                    <Card
                      key={i}
                      index={i + 1}
                      photo={item.album.images[1].url}
                      title={item.name}
                      type={'track'}
                      preview={item.preview_url}
                      setSongToPlay={setSongToPlay}>
                    </Card>
                  )))}
                </ul>
              </div>
            </div>
            <div className='shadow-xl rounded-md border border-gray-200 border-gray-500 bg-gray-600 m-4 col-span-full md:col-span-1'>
              <div className='py-2'>
                <div className='flex justify-center items-center border-b border-gray-200 mx-6 my-3 pb-2'>
                  <p className='text-2xl md:text-4xl text-white'> Top Artists:</p>
                </div>
                <ul className='grid grid-cols-1 gap-3 justify-center items-center pt-1 mx-3'>
                  {artistsData && artistsData.items.map((item, i) => ((
                    <Card
                      key={i}
                      index={i + 1}
                      photo={item.images[1].url}
                      title={item.name}>
                    </Card>
                  )))}
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
