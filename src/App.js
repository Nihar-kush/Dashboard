import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App h-screen w-full bg-[#f0f0f0]">
      <Topbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
