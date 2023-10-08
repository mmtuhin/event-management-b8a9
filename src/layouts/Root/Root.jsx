import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

const Root = () => {
  return (
    <div className="flex flex-col font-inter">
      <Header></Header>
      <div className="grid grid-cols-4 border">
        <LeftSidebar></LeftSidebar>
        <div className="border bg-slate-300 col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="mt-[60vh]">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
