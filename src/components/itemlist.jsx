import { Item } from "./item";

export const Itemlist = ({ products }) => {
    return (
        <>
            {products.map(prod => <Item key={prod.id} product={prod} />)}
        </>
    );
};