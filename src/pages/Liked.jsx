import { useSelector } from "react-redux";
import SongCard from "../components/music/SongCard";

export default function Liked() {
  const likedSongs = useSelector(
    (state) => state.player.likedSongs
  );

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">
        ❤️ Liked Songs
      </h2>

      {likedSongs.length === 0 ? (
        <p className="text-gray-400">
          No liked songs yet.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {likedSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}