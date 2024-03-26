import Header2 from '../components/Header2';
import Sidebar1 from '../components/Sidebar1';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout2(){

    return(
        <>
            <Header2/>
            <Sidebar1/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout2;