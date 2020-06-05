import Reflux from 'reflux';
import CustomerActions from '../actions/customer';

let _customer = {
  customer: [],
  validAddress: false,
};

class customer extends Reflux.Store {
  constructor(props) {
    super(props);

    this.listenTo(
      CustomerActions.SaveAddress,
      this.onSaveAddress,
    );
  }

  onSaveAddress = (address) => {
    _customer = address;
    console.log(_customer);
    this.emit();
  };

  emit = () => {
    this.trigger(_customer);
  };
}

export default customer;
