import "./CartModal.scss"
import { useContext } from "react"
import { AppContext } from "../../../context/AppContext"

import { BsTrash3 } from "react-icons/bs"

export default function CartModal() {



    const { quantCart, SetquantCart } = useContext(AppContext)

    function removeItemCart() {
        return SetquantCart(0)
    }

    return (
        <div className="modal-container">
            <h3>Cart</h3>
            <div className="line-cart"></div>

            {quantCart > 0 ? <div className="cart-products">
                <div className="produts-content">
                    <img src="/assets/images/image-product-1-thumbnail.jpg" alt="image product" />
                    <div className="product-description">
                        <p> Fall Limited Edition Sneakers</p>
                        <p>$125,00 x {quantCart} <strong> {`$${125.00 * quantCart},00`}</strong></p>
                    </div>
                    <BsTrash3 onClick={removeItemCart} className="btn-trash" />
                </div>
                <button>Checkout</button>
            </div> : <div className="empty">
                <p>Your cart is empty</p>
            </div>}

        </div>
    )
}