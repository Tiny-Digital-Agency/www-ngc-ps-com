import Header from "./Header";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import Topnav from "./Topnav";
const Layout = ({ navigation, children, settings, }) => {
    return (
        <div className="content">

            <Navigation
                navigation={navigation}
                settings={settings}
            />
            {children}
            <Footer
                navigation={navigation}
                settings={settings}
            />
        </div>
    );
}

export default Layout;