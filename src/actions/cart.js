import Reflux from 'reflux';


const Cart = {
  FetchCart: Reflux.createAction('FetchCart'),
  AddToCart: Reflux.createAction('AddToCart'),
  RemoveFromCart: Reflux.createAction('RemoveFromCart'),
  ClearCart: Reflux.createAction('ClearCart'),
};

export default Cart;
