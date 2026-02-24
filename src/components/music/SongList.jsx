import { useSelector } from "react-redux";
import { useState } from "react";
import SongCard from "./SongCard";

export default function SongList() {
  const songs = useSelector(
    (state) => state.songs.songs
  );

  const [search, setSearch] = useState("");

  const filteredSongs = songs.filter(
    (song) =>
      song.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      song.artist
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search songs..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="mb-6 p-2 w-full bg-[#181818] text-white rounded"
      />

      <div className="grid grid-cols-4 gap-6">
        {filteredSongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}