import { useContext } from "react";
import { AudioContext } from "../context/audioContext";

export const useAudioContext = () => 
{
    const context = useContext(AudioContext);

    if(context === undefined)
    {
        console.error('Please make sure the component is within the scope');
    }

    return context
}