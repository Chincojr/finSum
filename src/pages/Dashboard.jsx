import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar/>

            <div className="flex flex-col flex-1">
                <Navbar/>
            </div>
        </div>
    )
}

export default Dashboard;