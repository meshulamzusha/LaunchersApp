import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/launchers/:id" element={<LauncherDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
