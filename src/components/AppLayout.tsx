import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const AppLayout = () =>{

    const [ showSideBar, setShowSidebar ] = useState(false);

    return(
        <>
            {showSideBar && <Sidebar setShowSidebar={setShowSidebar} />}
            <Toaster />
            <main className=" flex-col flex min-h-screen overflow-hidden">
                <header className=" border-b-2 pb-5">
                    <Navbar setShowSidebar={setShowSidebar} />
                </header>
                
                <section className=" ">
                    <Outlet />
                </section>
            </main>
        </>
    )
}

export default AppLayout;