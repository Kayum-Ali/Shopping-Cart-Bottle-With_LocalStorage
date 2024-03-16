import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handlePurchaseCrat = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
    }
    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <p>Cart: {cart.length}</p>
            <div className="bottles-container">
                {
                    bottles.map((bottle) => <Bottle handlePurchaseCrat={handlePurchaseCrat} key={bottle.id} bottle={bottle}></Bottle>)
                }

            </div>
        </div>
    );
};

export default Bottles;