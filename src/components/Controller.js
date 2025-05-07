import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PauseIcon from "@mui/icons-material/Pause";
function Controller() {
  const {
    currentTrackIndex,
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handlePlayPreviousTrack = () => {
    playPreviousTrack();
  };
  const handleTogglePlay = () => {
    currentTrackIndex ? playTrack(currentTrackIndex) : playTrack(0);
  };
  const handlePlayNextTrack = () => {
    playNextTrack();
  };
  return (
    <div className="controller">
      <button onClick={handlePlayPreviousTrack}>
        <SkipPreviousIcon />
      </button>

      <button onClick={handleTogglePlay}>
        {isPlaying ? <PauseIcon /> : <ArrowRightIcon />}
      </button>

      <button onClick={handlePlayNextTrack}>
        <SkipNextIcon />
      </button>
    </div>
  );
}

export default Controller;
