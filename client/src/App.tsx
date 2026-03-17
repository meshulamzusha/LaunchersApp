import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import Login from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          element={
            <ProtectedRoute
              allowedUserTypes={["admin", "air", "intelligence"]}
            />
          }
        >
          <Route path="/launchers" element={<HomePage />} />
          <Route path="/launchers/:id" element={<LauncherDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
