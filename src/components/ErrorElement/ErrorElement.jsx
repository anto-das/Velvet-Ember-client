import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorImg from '../../assets/404.gif'

const ErrorElement = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <img src={errorImg} className="max-w-xl" alt="error" />
           <Link to={'/'}>
            <button className="btn btn-md capitalize text-white bg-gradient-to-l from-[#af8544] to-[#875f23]">
                back to home <FaHome></FaHome>
            </button>
           </Link>
        </div>
    );
};

export default ErrorElement;