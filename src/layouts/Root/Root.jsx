import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Banner from "../../components/Banner/Banner";
import Testimonials from "../../components/Testimonials/Testimonials";


const Root = () => {
  const location = useLocation()
  return (
    <div className="flex flex-col font-inter">
      <Header></Header>
      {location.pathname === '/' && <Banner />}
      <div className="grid grid-cols-1 md:grid-cols-4 border min-h-[90vh]">
      {location.pathname === '/' && <LeftSidebar></LeftSidebar>}
      {location.pathname === '/' ? <div className="bg-slate-300 col-span-3">
          <Outlet></Outlet>
        </div>: <div className="bg-slate-300 col-span-4">
          <Outlet></Outlet>
        </div>}
        
      </div>
      <div className="">
        {location.pathname === '/' && <Testimonials></Testimonials>}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
