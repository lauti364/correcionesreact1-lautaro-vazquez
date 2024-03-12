import { Item } from "./item";

export const ItemList = ({ products }) => {
    return (
        <>
            {products.map(prod => <Item key={prod.id} product={prod} />)}
        </>
    );
};