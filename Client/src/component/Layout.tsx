import {Outlet} from "react-router-dom";
import {Headers} from "./Headers";
import {Footer} from "./Footer";

export const Layout = () => {
  return (
    <div>
      <Headers/>
      <Outlet/>
      <Footer/>
    </div>
    )

}