import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>   
            <Sidebar/>     
        </div>
    )
}

export default Dashboard;