import './Bottle.css'
import PropTypes from 'prop-types'
const Bottle = ({bottle, handlePurchaseCrat}) => {

    const {img, name, price} = bottle;
    // console.log(bottle)
    return (
        <div className="bottle-container bottle">
            <h3 className='bottle-color'>Bottle: {name}</h3>
            <img  src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handlePurchaseCrat(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes={
    bottle: PropTypes.object.isRequired,
    handlePurchaseCrat: PropTypes.func.isRequired
}

export default Bottle;