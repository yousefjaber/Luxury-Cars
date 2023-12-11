import {Outlet} from 'react-router-dom'
import Navbar from './Navbar'
import Offer from './Offer';

const RootLayout =()=>{
    return (
        <>
        <Offer/>
        <Navbar/>
        <Outlet/>
        </>
    );
};
export default RootLayout;
