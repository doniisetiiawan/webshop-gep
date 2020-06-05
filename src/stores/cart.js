import Reflux from 'reflux';
import CartActions from '../actions/cart';

let _cart = { cart: [] };

class CartStore extends Reflux.Store {
  constructor() {
    super();
    this.listenTo(CartActions.AddToCart, this.onAddToCart);

    this.listenTo(
      CartActions.RemoveFromCart,
      this.onRemoveFromCart,
    );

    this.listenTo(CartActions.ClearCart, this.onClearCart);
  }

  fetchCart = () => {
    const sessionCart = sessionStorage.getItem('cart');

    if (sessionCart) {
      _cart = JSON.parse(sessionCart);
      this.emit();
    }
  };

  onAddToCart = (item) => {
    _cart.cart.push(item);
    sessionStorage.setItem('cart', JSON.stringify(_cart));
    this.emit();
    console.log(_cart);
  };

  onRemoveFromCart = (item) => {
    _cart.cart = _cart.cart.filter(
      (cartItem) => item !== cartItem,
    );
    sessionStorage.setItem('cart', JSON.stringify(_cart));
    this.emit();
  };

  onClearCart = () => {
    _cart.cart = [];
    sessionStorage.clear();
    this.emit();
  };

  emit = () => {
    this.trigger(_cart);
  };
}

export default CartStore;
