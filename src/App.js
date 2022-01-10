import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
