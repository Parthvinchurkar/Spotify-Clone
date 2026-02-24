import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SongCard from "../components/music/SongCard";

export default function SinglePlaylist() {
  const { name } = useParams();

  const playlist = useSelector((state) =>
    state.player.playlists.find(
      (p) => p.name === name
    )
  );

  if (!playlist)
    return <h2 className="text-white p-6">Not Found</h2>;

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">
        🎵 {playlist.name}
      </h2>

      {playlist.songs.length === 0 ? (
        <p className="text-gray-400">
          No songs in this playlist.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {playlist.songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}