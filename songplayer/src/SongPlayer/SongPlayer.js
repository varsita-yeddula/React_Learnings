import PlayList from './PlayList';
import Player from './Player';
import { useState } from 'react';

function SongPlayer() {
  const songs=[
    {
      title:"all of the girls you loved before",artist:"Taylor Swift",file:"/songs/All of the Girls.mp3", pic:"https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png"
    },
    {
      title:"Hits Different",artist:"Taylor Swift",file:"/songs/Hits Different.mp3", pic:"https://i.scdn.co/image/ab67616d0000b273fa747621a53c8e2cc436dee0"
    },
    {
      title:"Get Him Back!",artist:"Olivia Rodrigo",file:"/songs/Need .mp3", pic:"https://upload.wikimedia.org/wikipedia/en/0/03/Olivia_Rodrigo_-_Guts.png"
    },
    {
      title:"Nonsense",artist:"Sabrina Carpenter",file:"/songs/Need .mp3", pic:"https://i.scdn.co/image/ab67616d0000b273700f7bf79c9f063ad0362bdf"
    },
    {
      title:"Lookalike",artist:"Conan Gray",file:"/songs/Need .mp3", pic:"https://upload.wikimedia.org/wikipedia/en/5/5d/Conan_Gray_-_Superache.png"
    },
  ]
  const [currentIndex,setCurrentIndex]=useState(0);
  const[isPlaying,setIsPlaying]=useState(false);
  const currentSong=songs[currentIndex];
  const playNext=()=>{
    setCurrentIndex((prev)=>(prev+1)%songs.length);
  }
  const playPrev=()=>{
    setCurrentIndex((prev)=>(prev===0?songs.length-1:prev-1));
  }
    return (
    <div
      style={{
        padding: "32px",
        background: "linear-gradient(135deg, #b2f0ff 0%, #e0e7ff 100%)",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        maxWidth: "800px",
        margin: "40px auto",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2d3a4b",
          marginBottom: "28px",
          letterSpacing: "2px",
        }}
      >
        My PlayList
      </h1>
      <div
        style={{
          marginBottom: "24px",
          padding: "18px",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        }}
      >
        <Player
          song={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          playNext={playNext}
          playPrev={playPrev}
        />
      </div>
      <div
        style={{
          background: "#f7fafc",
          borderRadius: "10px",
          padding: "14px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
        }}
      >
        <PlayList
          songs={songs}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );

}

export default SongPlayer;
