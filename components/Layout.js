

import { Navigation } from "./Navigation";

const Layout = ({ children }) => {
    return ( 
        <div className="content">

            <Navigation/>
            { children }
        </div>
     );
}
 
export default Layout;