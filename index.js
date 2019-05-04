var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObj = {itemName: item, itemPrice: Math.random()}
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  let str = 'In your cart, you have ';
  for (let i = 0; i < cart.length; i++){
    if (i+1 !== cart.length){
      str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    else{
    str += `and ${cart[i].itemName} at  $${cart[i].itemPrice}.`     
    }
  }
  return str;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
