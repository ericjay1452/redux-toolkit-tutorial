import {useSelector} from "react-redux"
import {FaShoppingBag} from "react-icons/fa"

const Navbar = () => {
    const amount  = useSelector( (store) => store.cart.amount)
    return (
        <nav>
            <div className="nav-center">
                <h3>React Redux toolKit!</h3>

                <div className="nav-container">
                    <FaShoppingBag />

                    <div className = "amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar