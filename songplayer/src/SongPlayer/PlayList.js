import React from "react";

const PlayList = ({ songs, currentIndex, setCurrentIndex, setIsPlaying }) => {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "lightyellow",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h3>🎵 Playlist</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {songs.map((song, index) => (
          <li
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsPlaying(true);
            }}
            style={{
              marginBottom: "12px",
              padding: "12px",
              backgroundColor: index === currentIndex ? "#ffeaa7" : "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow:
                index === currentIndex
                  ? "0 0 8px rgba(255, 204, 0, 0.5)"
                  : "0 1px 3px rgba(0,0,0,0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9f9f9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                index === currentIndex ? "#ffeaa7" : "#fff";
            }}
          >
            <strong>{song.title}</strong> — {song.artist}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
