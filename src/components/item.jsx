import './item.css'
export const Item = ({ product }) => {
    return (<div className='bitem'>
        <div className='pro'>
        <div className=" max-w-xs mx-auto bg-gray-200 p-3 rounded-md shadow-md">
        <img src={`../public/data/img/${product.img}`} alt={`Imagen de ${product.title}`} />
        <h2 className="text-lg font-semibold font-bold mb-2">{product.title} {product.description}</h2>
        <p className="text-gray-700 mb-2 font-semibold">Talle: {product.size}</p>
        <p className="text-gray-700 mb-2">Stock: {product.stock}</p>
        <div className="flex justify-between items-center">
            <span className="text-xl font-bold">${product.price}</span>
            <button className="bg-cyan-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
                ver producto
            </button>
        </div>
    </div>
    </div>
    </div>
)
}