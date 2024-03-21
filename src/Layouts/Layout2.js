import Header2 from '../components/Header2';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout2(){

    return(
        <>
            <Header2/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout2;