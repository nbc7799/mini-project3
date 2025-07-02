import DetailPage from "./pages/DetailPage";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPAge";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="movies/:movieId" element={<DetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
