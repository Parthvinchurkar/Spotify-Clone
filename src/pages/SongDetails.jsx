import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SongDetails() {
  const { id } = useParams();
  const { songs } = useSelector((state) => state.songs);

  const song = songs.find((s) => s.id === Number(id));

  if (!song) return <p>Song not found</p>;

  return (
    <div>
      <img
        src={song.cover}
        alt=""
        className="w-60 h-60 object-cover rounded-lg"
      />

      <h2 className="text-2xl font-bold mt-4">
        {song.title}
      </h2>

      <p className="text-gray-500">{song.artist}</p>

      <p className="mt-2">Genre: {song.genre}</p>
    </div>
  );
}