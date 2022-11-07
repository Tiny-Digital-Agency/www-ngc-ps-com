import Header from "./Header";
import Footer from "./Footer";
import Topnav from "./Topnav";
const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Topnav/>
            <Header/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;