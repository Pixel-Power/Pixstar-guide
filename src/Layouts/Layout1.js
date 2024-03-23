import Header1 from '../components/Header1';
import Sidebar1 from '../components/Sidebar1';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout1(){
    

    return(
        <>
            <Header1/>
            <Sidebar1/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout1;