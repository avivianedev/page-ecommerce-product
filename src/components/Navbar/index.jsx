import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

import "./Navbar.scss"
import { BsCart3 } from "react-icons/bs"
import CartModal from "../Modal/CartModal"

export default function Navbar() {
    const [showmenu, SetShowmenu] = useState(false)
    const [showproduct, SetShowproduct] = useState(false)

    const { quantCart } = useContext(AppContext)

    function showMenu() {
        SetShowmenu(!showmenu)
    }
    function showProduct() {
        SetShowproduct(!showproduct)
    }

    return (
        <>
            <section className="navbar-container">
                <div className="nav-log-menu">
                    {showmenu
                        ? <img src="/assets/images/icon-close.svg" className='menu-hamburguer' alt="" onClick={showMenu} />
                        : <img src="/assets/images/icon-menu.svg" className='menu-hamburguer' alt="" onClick={showMenu} />
                    }
                    <span className="logo">sneakers</span>

                </div>
                <ul className="nav-list">
                    <li className="list-item"><a href="">Collections</a></li>
                    <li className="list-item"><a href="">Men</a></li>
                    <li className="list-item"><a href="">Women</a></li>
                    <li className="list-item"><a href="">About</a></li>
                    <li className="list-item"><a href="">Contact</a></li>
                </ul>
                {showmenu && <ul className="nav-list-resposive">
                    <li className="list-item"><a href="">Collections</a></li>
                    <li className="list-item"><a href="">Men</a></li>
                    <li className="list-item"><a href="">Women</a></li>
                    <li className="list-item"><a href="">About</a></li>
                    <li className="list-item"><a href="">Contact</a></li>
                </ul>}

                <div className="nav-cart-user">
                    <div className="cart-notification">
                        {quantCart > 0 ? <span className="notification-value">{quantCart}</span> : ""}
                        <BsCart3 onClick={showProduct} size={30} className="icon-cart" />
                    </div>

                    <img src="/assets/images/image-avatar.png" alt="logged in user image" />
                </div>
                {showproduct && <CartModal />}

            </section>
            <div className="line"></div>

        </>
    )
}