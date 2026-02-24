import { useDispatch, useSelector } from "react-redux";
import {
  setActiveSong,
  toggleLike,
} from "../../features/player/playerSlice";

export default function SongCard({ song }) {
  const dispatch = useDispatch();

  const likedSongs = useSelector(
    (state) => state.player.likedSongs
  );

  const isLiked = likedSongs.find(
    (s) => s.id === song.id
  );

  const handlePlay = () => {
    dispatch(setActiveSong(song));
  };

  return (
    <div
      onClick={handlePlay}
      className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] cursor-pointer transition"
    >
      <img
        src={song.cover}   // ✅ FIXED HERE
        alt={song.title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-white mt-3">
        {song.title}
      </h3>

      <p className="text-gray-400 text-sm">
        {song.artist}
      </p>

      <div className="mt-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleLike(song));
          }}
          className="text-lg"
        >
          {isLiked ? "💚" : "🤍"}
        </button>
      </div>
    </div>
  );
}