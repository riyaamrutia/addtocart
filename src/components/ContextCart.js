import React, { useContext } from "react";
import Items from "./Items";
import { Scrollbars } from 'react-custom-scrollbars-2';
//import {products} from "./products";
import { CartContext } from "./Cart";

const ContextCart = () => {
    //const [item, setItem]= React.useState(products);
    const {item , clearCart, totalItem , totalAmount} = useContext(CartContext);

    if(item.length === 0){
        return(
            <>
                <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />

                    <h3>Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" className="cart-icon" />
                    <p>{totalItem}</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">{totalItem}</span> items in the cart.</p>

                <div className="cart-items">

                    <div className="cart-items-container">
                        <Scrollbars>
                        {
                            item.map((curItem) => {
                                return <Items key={curItem.id} {...curItem}/>
                            })
                        }
                            
                        </Scrollbars>
                    </div>
                </div>

                <div className="card-total">
                    <h3>Cart Total: <span>{totalAmount}₹</span></h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
            </>
        )
    }
    return (
        
        <>
        <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />

                    <h3>Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" className="cart-icon" />
                    <p>{totalItem}</p>
                </div>
            </header>
            <section className="main-cart-section">
                <h1>shopping cart</h1>
                <p className="total-items">you have <span className="total-items-count">{totalItem}</span> items in the cart.</p>

                <div className="cart-items">

                    <div className="cart-items-container">
                        <Scrollbars>
                        {
                            item.map((curItem) => {
                                return <Items key={curItem.id} {...curItem}/>
                            })
                        }
                            
                        </Scrollbars>
                    </div>
                </div>

                <div className="card-total">
                    <h3>Cart Total: <span>{totalAmount}₹</span></h3>
                    <button>checkout</button>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            </section>

        </>
    )

}

export default ContextCart;