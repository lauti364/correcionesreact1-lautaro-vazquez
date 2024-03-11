import { Link } from "react-router-dom"
import { useCounter } from "../hooks/useCounter"

export const ItemDetail = ({ item }) => {
    const { count, increment, decrement, reset } = useCounter(1, item.stock, 1)

    const handleAddToCart = () => {
        console.log(`Estoy comprando ${count} de ${item.title}`)
        console.log("Producto agregado al carrito")
    }
    return (

        <div className="">
            

            <img className="w-full h-64 object-cover mb-6" src={`../data/img/${item.img}`} alt={`Imagen de ${item.title}`} />
            <div className="text-center">
                <h2 className="text-2x1 font-bold mb-2">{item.title}</h2>
                <p className="text-gray-700 mb-2 font-semibold">talle: {item.size}</p>
                <p className="text-gray-700 mb-2 font-semibold">Stock: {item.stock}</p>
                <p className="text-gray-700 mb-2 font-semibold">Precio: ${item.price}</p>
                <Link to={'/'}>
                <button className="">Cerrar</button>
            </Link>
                <div className="container mx-auto mt-8">
                    <div className="flex items-center justify-center space-x-4">
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={decrement}>
                            -
                        </button>
                        <span className="text-xl font-bold">{count}</span>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={increment}>
                            +
                        </button>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={reset}>
                            Reset
                        </button>
                        <button className="bg-indigo-500 text-white px-4 py-2 rounded" onClick={handleAddToCart}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}