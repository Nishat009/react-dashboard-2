import React from "react";
import Navbar from '../layouts/navbar'
import Sidebar from '../layouts/sidebar';
import Dashboard from '../Components/dashboardDetails';

function dashboard() {
    return ( 
        <div>
            <Navbar></Navbar>
        <div className="w-full flex justify-between pt-[56px]">
            <div className="h-screen sidebar-nav md:sticky z-[100] md:z-50 top-0 left-0 w-[270px] text-color-14 flex flex-col">
                <Sidebar/>
            </div>
            <div className="w-4/5 pt-10 9xl:px-[245px] 7xl:px-[135px] 5xl:px-[67px] px-5 pb-28 overflow-auto main-content flex flex-col flex-1  dark:bg-[#292929] border-l dark:border-[#474746] border-color-DF h-screen">
                <Dashboard/>
            </div>
        </div>
        </div>
        
     );
}

export default dashboard;