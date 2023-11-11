import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header>
            <Link to="/">Fast React pizza Co.</Link>    
            <SearchOrder />
            <p>Lam Pham</p>
        </header>
    )
}

export default Header
