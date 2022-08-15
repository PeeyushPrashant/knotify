import "./App.css";
import { Login, Signup, Home } from "./features";
import { Routes, Route } from "react-router-dom";
import { Aside } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
