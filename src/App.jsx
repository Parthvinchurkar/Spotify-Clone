import Sidebar from "./components/layout/Sidebar";
import TopPlay from "./components/layout/TopPlay";
import AppRoutes from "./routes";
import Notification from "./components/common/Notification";

export default function App() {
  return (
    <div className="flex h-screen bg-[#121212] text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Pages */}
        <div className="flex-1 overflow-y-auto p-6">
          <AppRoutes />
        </div>

        {/* Player */}
        <TopPlay />
      </div>

      {/* 🔔 GLOBAL Notification (IMPORTANT) */}
      <Notification />
      
    </div>
  );
}