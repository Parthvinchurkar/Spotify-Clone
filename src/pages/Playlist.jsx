import { useSelector, useDispatch } from "react-redux";
import { addPlaylist } from "../features/player/playerSlice";
import { Link } from "react-router-dom";

export default function Playlist() {
  const dispatch = useDispatch();
  const playlists = useSelector(
    (state) => state.player.playlists
  );

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">
        🎵 Playlists
      </h2>

      <button
        onClick={() => {
          const name = prompt("Playlist name?");
          if (name) dispatch(addPlaylist(name));
        }}
        className="bg-green-500 px-4 py-2 rounded mb-6"
      >
        + Create Playlist
      </button>

      {playlists.length === 0 ? (
        <p className="text-gray-400">
          No playlists yet.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {playlists.map((p, i) => (
            <Link
              key={i}
              to={`/playlist/${p.name}`}
              className="bg-[#181818] p-4 rounded hover:bg-[#282828]"
            >
              <h3>{p.name}</h3>
              <p className="text-sm text-gray-400">
                {p.songs.length} Songs
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}