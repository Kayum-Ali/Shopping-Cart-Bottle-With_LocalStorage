const getStoredCart = ()=>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}
const addToLS = (id)=>{
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLS(cart);

}
const saveCartToLS= (cart)=>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}
export {addToLS};







