import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Register from "./screens/Register";
import Header from "./Components/Header/Header";
import VideoPlayer from "./screens/VideoPlayer";
import AskQuetion from "./screens/AskQuetion";

function App() {
  return (
    <div className="bg-grey-300">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/videoplayer" element={<VideoPlayer />} />
        <Route exact path="/ask-question" element={<AskQuetion />} />
      </Routes>
    </div>
  );
}

export default App;
