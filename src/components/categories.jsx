import { Link } from "react-router-dom";
import { Cart } from "./Cart";

export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link to={'/'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>Inicio</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/Urban'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>Urbanas</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/Skate'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>Skate</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/Basketball'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>Basquet</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/Fotball'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>futbol</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/Formal'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <span>Formales</span>
                    </button>
                </Link>
            </li>
        </>
    );
};
