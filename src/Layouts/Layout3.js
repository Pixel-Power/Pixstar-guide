import Header1 from '../components/Header1';

import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout3(){

    return(
        <>
            <Header1/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout3;