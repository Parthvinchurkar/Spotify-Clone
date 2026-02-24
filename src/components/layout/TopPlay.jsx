import { useSelector, useDispatch } from "react-redux";
import {
  togglePlay,
  setActiveSong,
  toggleLike,
  toggleShuffle,
  toggleRepeat,
} from "../../features/player/playerSlice";
import { useRef, useEffect, useState } from "react";
import formatTime from "../../utils/formatTime";

export default function TopPlay() {
  const {
    activeSong,
    isPlaying,
    likedSongs,
    isShuffle,
    isRepeat,
  } = useSelector((state) => state.player);

  const songs = useSelector((state) => state.songs.songs);

  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (!audioRef.current) return;

    isPlaying
      ? audioRef.current.play()
      : audioRef.current.pause();
  }, [isPlaying, activeSong]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("timeupdate", update);
    return () =>
      audio.removeEventListener("timeupdate", update);
  }, [activeSong]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  if (!activeSong) return null;

  const index = songs.findIndex(
    (s) => s.id === activeSong.id
  );

  const next = () => {
    if (isShuffle) {
      const random =
        songs[Math.floor(Math.random() * songs.length)];
      dispatch(setActiveSong(random));
    } else {
      dispatch(setActiveSong(songs[(index + 1) % songs.length]));
    }
  };

  const prev = () =>
    dispatch(
      setActiveSong(
        songs[(index - 1 + songs.length) % songs.length]
      )
    );

  const isLiked = likedSongs.find(
    (s) => s.id === activeSong.id
  );

  const progress =
    (currentTime / (audioRef.current?.duration || 1)) *
    100;

  return (
    <div className="h-24 bg-[#181818] flex items-center px-6 justify-between text-white">

      {/* LEFT */}
      <div className="flex items-center gap-4 w-1/4">
        <img
  src={activeSong.cover}
  alt={activeSong.title}
  className="w-14 h-14 rounded object-cover"
/>
        <div>
          <p>{activeSong.title}</p>
          <p className="text-sm text-gray-400">
            {activeSong.artist}
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center w-1/2">
        <div className="flex gap-6 text-xl">
          <button onClick={() => dispatch(toggleShuffle())}>
            🔀
          </button>
          <button onClick={prev}>⏮</button>
          <button
            onClick={() => dispatch(togglePlay())}
            className="bg-white text-black w-10 h-10 rounded-full"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button onClick={next}>⏭</button>
          <button onClick={() => dispatch(toggleRepeat())}>
            🔁
          </button>
        </div>

        <div className="flex items-center gap-3 w-full text-xs mt-2">
          <span>{formatTime(currentTime)}</span>

          <div className="flex-1 h-1 bg-gray-700 rounded relative">
            <div
              className="h-1 bg-green-500 rounded"
              style={{ width: `${progress}%` }}
            ></div>

            <input
              type="range"
              min="0"
              max={audioRef.current?.duration || 0}
              value={currentTime}
              onChange={(e) =>
                (audioRef.current.currentTime =
                  e.target.value)
              }
              className="absolute w-full h-1 opacity-0 cursor-pointer"
            />
          </div>

          <span>
            {formatTime(audioRef.current?.duration)}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 w-1/4 justify-end">
        <button
          onClick={() => dispatch(toggleLike(activeSong))}
          className={isLiked ? "text-green-400 text-xl" : "text-white text-xl"}
         >
  {          isLiked ? "💚" : "🤍"}
          </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-20"
        />
      </div>

      <audio
        ref={audioRef}
        src={activeSong.audio}
        onEnded={() =>
          isRepeat ? audioRef.current.play() : next()
        }
      />
    </div>
  );
}