import react from "react";
import { Link } from 'react-router-dom';
import logo from '../Assests/Frame 27.png';
import { Bell } from 'lucide-react'; 
import avatar from '../Assests/Rectangle (1).png'

function Navbar() {
    return (
        <nav className="h-[100px] bg-white shadow-md px-6 flex items-center justify-between ">
            <Link to="/Dashboard">
                <img src={logo} alt="Finsum logo" className="h-10 w-auto transition-transform duration-200 group-hover:scale-105" />
            </Link>

            <div className="flex items-center space-x-6">
                <button className="relative text-gray-600 hover:text-gray-800 focus:outline-none">
                    <Bell className="h-6 w-6"/>
                </button>
                <img 
                    src={avatar}
                    alt="User Avatar" 
                    className="h-10 w-10 rounded-full object-cover border border-gray-300" />
            </div>
        </nav>
    )
}

export default Navbar;