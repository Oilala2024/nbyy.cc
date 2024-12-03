import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./Layout";
import { HomePage } from "./pages/Home/HomePage";
import { MovieDetailPage } from "./pages/Move/Move";
import { ROUTES_PATH } from "./routes/routes.constant";

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route element={<Layout />}>
     <Route index element={<HomePage />}></Route>
     <Route path={ROUTES_PATH.DETAIL} element={<MovieDetailPage />} />
    </Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
