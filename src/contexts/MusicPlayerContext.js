import React, { useState, createContext } from "react";
import Track1 from "../mp3/Track1.mp3";
import Track2 from "../mp3/Track2.mp3";
import Track3 from "../mp3/Track3.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "Save Me - Pop",
        file: Track1, 
      },
      {
        name: "Keep Calm - Pop",
        file: Track2,
      },
      {
        name: "Sunset - Pop",
        file: Track3,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  };

const MusicPlayerProvider = ({children}) =>{
  const [state, setState] = useState(defaultValues);

  return (
    <MusicPlayerContext.Provider value={{state, setState}}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
