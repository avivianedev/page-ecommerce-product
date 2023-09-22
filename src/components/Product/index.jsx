import "./Product.scss"
import CarouselComponent from "./CarouselComponent"
import { BsCart3 } from "react-icons/bs"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"


export default function Product() {

    const { quant,
        Setquant,
        quantCart,
        SetquantCart } = useContext(AppContext)

    function addQuantity() {
        return Setquant(quant + 1)
    }
    function removeuantity() {
        if (quant === 0) {
            alert("you can't remove anymore")
            return
        }
        return Setquant(quant - 1)
    }
    function addToCart() {
        return SetquantCart(quant)
    }



    return (

        <section className="product-container">
            <div className="product-carousel">
                <CarouselComponent />
            </div>
            <div className="product-info">
                <h3> Sneaker Company</h3>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className="p-content">
                    <div className="product-price">
                        <p>$125.00</p>
                        <span>50%</span>
                    </div>
                    <span>$250.00</span>
                </div>
                <div className="product-add-btn">
                    <div className="product-add">
                        <button onClick={removeuantity}><img src="/assets/images/icon-minus.svg" alt="image to remove" /></button>
                        <p>{quant}</p>
                        <button onClick={addQuantity}><img src="/assets/images/icon-plus.svg" alt="add image" /></button>
                    </div>
                    <button className="btn-addcart" onClick={addToCart}>
                        <BsCart3 className="icon-cart" />
                        Add to cart
                    </button>
                </div>
            </div>

        </section>

    )
}