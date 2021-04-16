import { useRef, useState } from "react";
import "./styles.css";

function SongListItem({ song, isCurrent, onSelect }) {
  function handleClick() {
    onSelect(song);
  }
  return (
    <li
      className={`SongListItem ${isCurrent ? "selected" : ""}`}
      onClick={handleClick}
    >
      {song.title} by {song.artist}
    </li>
  );
}

function AudioPlayer(song) {
  const audioRef = useRef();
  var [showControls, setshow] = useState(false);
  const { audioUrl, id } = song;
  // var  audioUrl  = "https://www.front-music.pl/data/free/086-front-music.pl.mp3";

  console.log(song, audioUrl, id);
  return (
    <div>
      <audio ref={audioRef} key={audioUrl} controls={showControls}>
        <source
          src={"https://www.front-music.pl/data/free/086-front-music.pl.mp3"}
        />
      </audio>

      <br />
      <button onClick={() => setshow(!showControls)}>hide/show</button>
      <button onClick={() => audioRef.current.play()}>Play</button>
    </div>
  );
}

export default function App() {
  const songs = [
    {},

    {
      url: "https://www.front-music.pl/data/free/090-front-music.pl.mp3",
      id: 1
    },
    {
      url: "https://www.front-music.pl/data/free/152-front-music.pl.mp3",
      id: 2
    },
    {
      url: "https://www.front-music.pl/data/free/174-front-music.pl.mp3",
      id: 3
    },
    {
      url: "https://www.front-music.pl/data/free/487-front-music.pl.mp3",
      id: 4
    },
    {
      url: "https://www.front-music.pl/data/free/155-front-music.pl.mp3",
      id: 5
    }
  ];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <AudioPlayer song={songs} />
      <ul>
        {songs.map((song) => song.url)}
        <br />
      </ul>
    </div>
  );
}
