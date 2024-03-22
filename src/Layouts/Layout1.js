import Header1 from '../components/Header1';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout1(){
    

    return(
        <>
            <Header1/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout1;