import { Outlet } from "react-router";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const Layout = () => {
 return (
  <>
   <div className="container mx-auto px-4 max-w-6xl">
    <Header />
    <div className="pt-20">
     <Outlet />
    </div>
   </div>
   <Footer />
  </>
 );
};
