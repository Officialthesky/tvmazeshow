import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Showinfo from "./Pages/Showinfo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:showId" element={<Showinfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
