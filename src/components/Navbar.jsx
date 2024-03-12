import {Categories} from './categories'
import { CartWidget } from "./CartWidget"
export const Navbar = () => {
    return (
        <div>
            <header>
<h3>ShoesBA</h3>
    <nav>
    <Categories />
    <CartWidget />
    </nav> 
</header>
        </div>
    )
}