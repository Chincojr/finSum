import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import UserSummaryCard from "../component/UserSummaryCard";

function PersonaPage() {
    return(
        <div className="flex h-screen">
            <Sidebar/>

            <div className="flex flex-col flex-1">
                <Navbar/>
            </div>
        </div>
    )
}

export default PersonaPage;