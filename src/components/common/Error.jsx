export default function Error({ message }) {
  return (
    <div className="flex justify-center items-center h-60">
      <p className="text-red-500">{message}</p>
    </div>
  );
}