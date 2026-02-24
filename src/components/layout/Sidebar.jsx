import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-black p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-white">
        Dashboard
      </h1>

      <Link
        to="/"
        className="text-gray-300 hover:text-green-400"
      >
        Home
      </Link>

      <Link
        to="/liked"
        className="text-gray-300 hover:text-green-400"
      >
        Liked Songs

       
      </Link>
    </div>
  );
}