import './Bottle.css'
const Bottle = ({bottle, handlePurchaseCrat}) => {

    const {img, name, price} = bottle;
    console.log(bottle)
    return (
        <div className="bottle-container bottle">
            <h3 className='bottle-color'>Bottle: {name}</h3>
            <img  src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={handlePurchaseCrat}>Purchase</button>
        </div>
    );
};

export default Bottle;