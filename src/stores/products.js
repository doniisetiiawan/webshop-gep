import Reflux from 'reflux';
import Request from 'superagent';
import Actions from '../actions/products';

class ProductStore extends Reflux.Store {
  constructor() {
    super();
    this.listenTo(
      Actions.FetchProducts,
      this.onFetchProducts,
    );
  }

  onFetchProducts = () => {
    Request.get('http://localhost:3000/products.json').end((err, res) => {
      if (err) alert(err);
      this.trigger(JSON.parse(res.text));
    });
  };
}

export default ProductStore;
