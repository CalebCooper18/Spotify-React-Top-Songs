import { createContext, useState } from "react"


export const AudioContext = createContext();


export const AudioContextProvider = ({ children }) => {

    const [song, setSong] = useState();

    function setSongToPlay (url){
        if(song)
        {
            song.pause();
        }
        const newSong = new Audio(url);
        newSong.play();
        setSong(newSong);
    }

    return (
    <AudioContext.Provider value={{setSongToPlay}}>
        {children}
    </AudioContext.Provider>
    )
}