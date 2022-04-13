import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
