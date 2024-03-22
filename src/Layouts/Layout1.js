import Header1 from '../components/Header1';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Layout1(){
    

    return(
        <>
            <Header1/>
            <Sidebar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout1;