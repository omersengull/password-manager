import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./pages/HomePage";
function App() {
  
  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-8">
      <Toaster position="top-right" />
      <Home/>
    </div>
  );
}

export default App;
