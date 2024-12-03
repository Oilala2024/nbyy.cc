import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import { Layout } from "./Layout";
import { HomePage } from "./pages/Home/HomePage";

function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route element={<Layout />}>
     <Route index element={<HomePage />}></Route>
    </Route>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
