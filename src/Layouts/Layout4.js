import Header2 from '../components/Header2';

import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout4(){

    return(
        <>
            <Header2/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout4;