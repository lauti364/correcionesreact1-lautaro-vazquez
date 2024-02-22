import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { ItemList } from "./itemlist"
export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(prods => {
                if (cid) {
                    const productosFiltrados = prods.filter(prod => prod.category == cid)
                    setProducts(productosFiltrados)
                } else {
                    setProducts(prods)
                }

            })
            .catch((error) => console.log(error))
    }, [cid])


    return (
        <div className="flex flex-wrap gap-4 justify-center">
            <ItemList products={products} />
        </div>
    )
}