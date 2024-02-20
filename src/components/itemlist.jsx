import { Item } from "./item"
export const ItemList = ({ products }) => {
    return (
        <>
            {products.map(prod => <Item product={prod} />)}
        </>

    )
}