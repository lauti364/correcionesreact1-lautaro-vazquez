import { Link } from "react-router-dom"
import { useCarritoContext } from "../context/CartContext"
import { Itemlist } from "./Itemlist" 
export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {
                carrito.length === 0 ?
                    <>
                        <h1>Carrito Vacio</h1>
                        <button>
                            <Link to={'/'}>
                                Volver al inicio
                            </Link>
                        </button>
                    </>
                    :
                    <div>
                        {<Itemlist products={carrito} plantilla="ItemCart" />}
                        <div>
                            <p>Resumen de la compra: $ {totalPrice()}</p>
                            <button className="bg-indigo-500 text-white px-4 py-2 rounded" onClick={emptyCart}>
                                Vaciar Carrito
                            </button>
                            <button>
                                <Link to={'/'}>
                                    Continuar Comprando
                                </Link>
                            </button>
                            <button>
                                <Link to={'/checkout'}>
                                    Finalizar compra
                                </Link>
                            </button>
                        </div>
                    </div>

            }

        </>
    )
}