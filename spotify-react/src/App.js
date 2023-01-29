import { useEffect, useState } from 'react';
import './index.css';


function App() {

  const CLINET_ID = '03aeaded767a49b483a3fb235cc3a196'
  const REDIRECT_URI = 'http://localhost:3000';
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = 'token'


  return (
    <div>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLINET_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >Login Into Spotify</a>
      </div>
  );
}

export default App;
