import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-w-screen max-w-screen flex min-h-screen justify-center bg-black text-white">
      <Outlet />
    </div>
  );
}

export default App;
