import './Cart.css'
import PropTypes from 'prop-types'

const Cart = ({cart}) => {
    return (
        <div className="cart-container">
            <p>Cart: {cart.length}</p>
            {
                cart.map(Bottle => <img key={Bottle.id} src={Bottle.img}></img>)
            }

            
        </div>
    );
};
Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;