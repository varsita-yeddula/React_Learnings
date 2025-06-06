import React,{ useEffect, useRef } from "react";

function Player({song, isPlaying, setIsPlaying, playNext, playPrev}){

    const audioRef = useRef(null);

    useEffect(()=>{
        if(isPlaying){
            audioRef.current.play().catch(()=>{});
        }
        else{
            audioRef.current.pause();
        }
    },[isPlaying,song])

    const togglePlay = () => {
        setIsPlaying((prev) => !prev);
    }
    const handleEnded = () => {
        playNext();
    };

    const styles = {
        container: {
            padding: '20px',
            alignItems: 'center',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #f8bbd0 0%, #fce4ec 100%)',
            boxShadow: '0 4px 16px rgba(233, 30, 99, 0.15)',
            borderRadius: '10px',
            maxWidth: '800px',
            margin: '40px auto',
            border: '1px solid #f06292'
        },
        title: {
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#ad1457',
            marginBottom: '8px',
            letterSpacing: '1px'
        },
        artist: {
            fontSize: '1.1rem',
            color: '#6d4c41',
            marginBottom: '18px'
        },
        controls: {
            display: 'flex',
            background: 'linear-gradient(90deg, #b2ebf2 0%, #e1f5fe 100%)',
            width: '220px',
            margin: '0 auto',
            justifyContent: 'center',
            gap: '18px',
            marginTop: '20px',
            boxShadow: '0 2px 8px rgba(33, 150, 243, 0.08)',
            borderRadius: '12px',
            padding: '10px'
        },
        button: {
            background: '#fff',
            border: 'none',
            borderRadius: '20%',
            width: '40px',
            height: '40px',
            fontSize: '1.5rem',
            color: '#1976d2',
            cursor: 'pointer',
            transition: 'background 0.2s, transform 0.2s',
            boxShadow: '0 1px 4px rgba(33, 150, 243, 0.10)'
        }
    };
    return (
        <div style={styles.container}>
            <img src={song.pic} alt={song.title} style={{ width: '200px', marginBottom: '20px' }} />
            <h2 style={styles.title}>{song.title}</h2>
            <p style={styles.artist}>{song.artist}</p>
            <audio ref={audioRef} src={song.file} onEnded={handleEnded} />
            <div style={styles.controls}>
                <button style={styles.button} onClick={playPrev}>⏮️</button>
                <button style={styles.button} onClick={togglePlay}>{isPlaying ? "⏸️" : "▶️"}</button>
                <button style={styles.button} onClick={playNext}>⏭️</button>
            </div>
        </div>
    );
};
export default Player