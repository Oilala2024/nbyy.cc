import { Outlet } from "react-router";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

export const Layout = () => {
 return (
  <>
   <Header />
   <div className="py-20 container mx-auto px-4 max-w-6xl">
    <Outlet />
   </div>
   <Footer />
  </>
 );
};
