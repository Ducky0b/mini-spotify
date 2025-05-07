import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PauseIcon from "@mui/icons-material/Pause";
function TrackList() {
  const {
    trackList,
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
  } = useMusicPlayer();

  return (
    <div className="track-list">
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <button
          className="track-btn"
          key={index}
          onClick={() => {
            playTrack(index);
          }}
        >
          {currentTrackIndex === index ? <PauseIcon /> : <HeadphonesIcon />}
          <div className="song-title">{track.name}</div>
        </button>
      ))}
    </div>
  );
}
export default TrackList;
