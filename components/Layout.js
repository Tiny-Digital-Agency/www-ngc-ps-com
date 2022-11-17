import Header from "./Header";
import { Navigation } from "./Navigation";
import Footer from "./Footer";
import Topnav from "./Topnav";
const Layout = ({ navigation, children }) => {
    return ( 
        <div className="content">
            <Navigation navigation={navigation}/>
            { children }
            <Footer/>
        </div>
     );
}
 
export default Layout;