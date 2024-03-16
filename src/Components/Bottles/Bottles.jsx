import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(()=>{
        console.log('jdsfhhs', bottles.length)
       if(bottles.length > 0){
        const storedCart = getStoredCart()
        console.log(storedCart)

        const saveCart = []
        for(const id of storedCart){
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                saveCart.push(bottle)
            }
        }
        console.log(saveCart)
        setCart(saveCart)
       }
    },[bottles])

    const handlePurchaseCrat = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLS(bottle.id)
    }
    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart}></Cart>


            <div className="bottles-container">
                {
                    bottles.map((bottle) => <Bottle handlePurchaseCrat={handlePurchaseCrat} key={bottle.id} bottle={bottle}></Bottle>)
                }

            </div>
        </div>
    );
};

export default Bottles;