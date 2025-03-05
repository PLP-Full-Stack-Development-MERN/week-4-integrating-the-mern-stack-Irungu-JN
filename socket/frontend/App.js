import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomJoin from "./components/RoomJoin";
import NoteEditor from "./components/NoteEditor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoomJoin />} />
        <Route path="/room/:room" element={<NoteEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
