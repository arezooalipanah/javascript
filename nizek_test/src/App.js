import LoginPage from "./pages/LoginPage";
import CategoriesPage from "./pages/CategoriesPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/categories" element={<CategoriesPage />} />
    </Routes>)
}

export default App;
