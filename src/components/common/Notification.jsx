import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearNotification } from "../../features/player/playerSlice";

export default function Notification() {
  const dispatch = useDispatch();
  const notification = useSelector(
    (state) => state.player.notification
  );

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      dispatch(clearNotification());
    }, 2000);

    return () => clearTimeout(timer);
  }, [notification, dispatch]);

  if (!notification) return null;

  return (
    <div className="fixed bottom-28 right-6 bg-green-500 text-black px-4 py-2 rounded shadow-lg z-50">
      {notification}
    </div>
  );
}