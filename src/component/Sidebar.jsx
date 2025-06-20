import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../Assests/Frame 27.svg'
import PersonaIcon from '../Assests/icons/user-square.svg';
import DashboardIcon from '../Assests/icons/material-symbols_dashboard-outline.svg';
import PortfolioIcon from '../Assests/icons/bytesize_portfolio.svg';
import MarketIcon from '../Assests/icons/icon-park-outline_stock-market.svg';
import LifeEventsIcon from '../Assests/icons/receipt.svg';
import LeaderboardIcon from '../Assests/icons/cup.svg';
import LogoutIcon from '../Assests/icons/logout.svg';

function NavItem ({ to, label, icon }) {
    return(
        <NavLink 
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"
                }`
            }
            >
            <img src={icon} alt={`${label} icon`} className="w-5 h-5"/>
            {label}
        </NavLink>
    )
};

function Sidebar () {
    return (
        <aside className="sticky top-0 w-64 h-full bg-white border-gray-200 pb-6 px-4 hidden md:flex flex-col justify-between font-poppins">
            <div className="space-y-8">

                <div className="h-[100px] flex items-center px-3 pt-6">
                    <img src={logo} alt="Finsum logo" className="h-8 w-auto" />
                </div>

                <nav className="flex-1 space-y-7 pt-3">
                    <NavItem to="/persona" label="Persona" icon={PersonaIcon} />
                    <NavItem to="/Dashboard" label="Dashboard" icon={DashboardIcon} />
                    <NavItem to="/portfolio" label="Portfolio" icon={PortfolioIcon} />
                    <NavItem to="/market" label="Market" icon={MarketIcon} />
                    <NavItem to="/life-events" label="Life Events" icon={LifeEventsIcon} />
                    <NavItem to="/leaderboard" label="Leaderboard" icon={LeaderboardIcon} />
                </nav>
            </div>
            
            <div className="mt-auto pt-6">
                <NavItem to="/logout" label="Logout" icon={LogoutIcon} />
            </div>
        </aside>
    )
}

export default Sidebar;