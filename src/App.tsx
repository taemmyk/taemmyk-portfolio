import { Routes, Route } from "react-router-dom";
import StopMotion from "./pages/stopmotion";
import Content from "./pages/content";

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<StopMotion />} />
      <Route path="/me" element={<Content />} />
    </Routes>
    </>
  );
}

export default App;
