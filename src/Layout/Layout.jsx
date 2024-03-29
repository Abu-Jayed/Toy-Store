import { Outlet } from "react-router-dom";
import NavigationBar from "../Shared/NavigationBar";
import Footer from "../Shared/Footer";

const Layout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
