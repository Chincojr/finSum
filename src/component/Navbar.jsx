import react from "react";
import { Link } from 'react-router-dom';
import logo from '../Assests/Frame 27.png';
import { Bell } from 'lucide-react'; 
import avatar from '../Assests/Rectangle (1).png'

function Navbar() {
    return (
        <nav className="h-[100px] shadow-md relative bg-white  px-6 flex items-center justify-end " 
            style={{
                boxShadow: 
                    'inset 10px 0 8px -10px white, 4px 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
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