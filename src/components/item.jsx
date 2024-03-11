import { Link } from 'react-router-dom'
import './item.css'
export const Item = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`}>
    <div className='bitem'>
        <div className='pro'>
        <div className=" max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md">
        <img src={`${product.img}`} alt={`Imagen de ${product.title}`} />
        <h2 className="text-lg font-semibold font-bold mb-2">{product.title} {product.description}</h2>
        <p className="text-gray-700 mb-2 font-semibold">Talle: {product.size}</p>
        <div className="flex justify-between items-center">
            <span className="text-xl font-bold"> precio:${product.price}</span>
        </div>
    </div>
    </div>
    </div>
    </Link>
)
}