import "./App.css";
import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import useMusicPlayer from "./hooks/usePlayerProvider";

function App() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className="container">
      <div className="header">
        <marquee>{currentTrackName}</marquee>
      </div>
      <TrackList />
      <Controller />
    </div>
  );
}
export default App;
