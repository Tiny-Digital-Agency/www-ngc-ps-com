import Header from "./Header";
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import Topnav from "./Topnav";
const Layout = ({ children }) => {
    return ( 
        <div className="content">
            {/* <Topnav/> */}
            {/* <Header/> */}
            {/* <Navigation /> */}
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;