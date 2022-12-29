import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { Outlet } from "react-router-dom";
import Sidebar2 from '../../components/sidebar2/Sidebar2';
import Sidebar3 from '../../components/sidebar3/Sidebar3';


const layout = (props) => {
    const { children } = props;
    return (
        <>
            {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-3">
                        <SidebarLayout />
                    </div>
                    <div className="col-lg-10 col-md-9 pe-4 ps-4">
                        <Navbar />
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
            </div> */}


            {/* <div className='d-flex'>
                <Sidebar2 />
                <div className='ps-3 pe-3 w-100'>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </div>
            </div> */}


            <div className='d-flex'>
                <div>
                    <Sidebar3 />
                </div>
                <div className='ps-3 pe-3'>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </div>
            </div>

        </>
    )
}

export default layout