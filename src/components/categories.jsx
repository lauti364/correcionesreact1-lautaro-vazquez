import { Link } from "react-router-dom"
export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link to={'/'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <home />
                        <span>Inicio</span>
                    </button>
                </Link>

            </li>
            <li className="text-white">
                <Link to={'/category/Urban'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <urban/>
                        <span>Urbanas</span>
                    </button>
                </Link>
                </li>
                <li className="text-white">
                <Link to={'/category/Skate'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <skate/>
                        <span>Skate</span>
                    </button>
                </Link>
                </li>
                <li className="text-white">
                <Link to={'/category/Basketball'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <basketball/>
                        <span>Basquet</span>
                    </button>
                </Link>
                </li>
                <li className="text-white">
                <Link to={'/category/Fotball'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <football/>
                        <span>Futbol</span>
                    </button>
                </Link>
            </li>
            <li className="text-white">
                <Link to={'/category/Formal'}>
                    <button className="bg-teal-500 text-white px-4 py-2 rounded flex items-center">
                        <formal/>
                        <span>Formales</span>
                    </button>
                </Link>
            </li>
        </>
    )
}