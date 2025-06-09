import react from "react";
import { Link } from 'react-router-dom';
import { Bell } from 'lucide-react'; 
import avatar from '../Assests/Rectangle.svg'
import bell from "../Assests/notification.svg"

function Navbar() {
    return (
        <nav className="h-[100px] bg-white  px-6 flex items-center justify-end " >
            <div className="flex items-center space-x-6">
                <button className="relative text-gray-600 hover:text-gray-800 focus:outline-none">
                    <img src={bell} alt="notification" />
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