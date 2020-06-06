import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import CustomerActions from '../actions/customer';

class customerdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        name: this.props.customer.address.name
          ? this.props.customer.address.name
          : '',
        address: this.props.customer.address.address
          ? this.props.customer.address.address
          : '',
        zipCode: this.props.customer.address.zipCode
          ? this.props.customer.address.zipCode
          : '',
        city: this.props.customer.address.city
          ? this.props.customer.address.city
          : '',
      },
      validAddress: this.props.customer.validAddress
        ? this.props.customer.validAddress
        : false,
    };
    this.inputName = React.createRef();
    this.inputAddress = React.createRef();
    this.inputZipCode = React.createRef();
    this.inputCity = React.createRef();
  }

  validationStateName = () => {
    const { length } = this.state.customer.name;
    if (length > 3) return 'success';
    if (length > 1) return 'warning';
    if (length > 0) return 'error';
  };

  handleChangeName = () => {
    const { state } = this;
    state.customer.name = this.inputName.current.value;
    if (this.checkAllValidations()) {
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(this.state);
  };

  validationStateAddress = () => {
    const { length } = this.state.customer.address;
    if (length > 5) return 'success';
    if (length > 2) return 'warning';
    if (length > 0) return 'error';
  };

  handleChangeAddress = () => {
    const state = { ...this.state };
    state.customer.address = this.inputAddress.current.value;
    if (this.checkAllValidations()) {
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(state);
  };

  validationStateZipCode = () => {
    const { length } = this.state.customer.zipCode;
    if (length > 3) return 'success';
    if (length > 1) return 'warning';
    if (length > 0) return 'error';
  };

  handleChangeZipCode = () => {
    const state = { ...this.state };
    state.customer.zipCode = this.inputZipCode.current.value;
    if (this.checkAllValidations()) {
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(state);
  };

  validationStateCity = () => {
    const { length } = this.state.customer.city;
    if (length > 3) return 'success';
    if (length > 1) return 'warning';
    if (length > 0) return 'error';
  };

  handleChangeCity = () => {
    const state = { ...this.state };
    state.customer.city = this.inputCity.current.value;
    if (this.checkAllValidations()) {
      state.validAddress = true;
    }
    this.setState(state);
    CustomerActions.SaveAddress(state);
  };

  checkAllValidations = () => this.validationStateName() === 'success'
    && this.validationStateAddress() === 'success'
    && this.validationStateZipCode() === 'success'
    && this.validationStateCity() === 'success';

  render() {
    return (
      <div>
        <Form>
          <Form.Control
            type="text"
            value={this.state.customer.name}
            placeholder="Enter your name"
            label="Name"
            ref={this.inputName}
            onChange={this.handleChangeName}
          />
          {this.validationStateName()}
          <Form.Control
            type="text"
            value={this.state.customer.address}
            placeholder="Enter your street address"
            label="Street "
            ref={this.inputAddress}
            onChange={this.handleChangeAddress}
          />
          {this.validationStateAddress()}
          <Form.Control
            type="text"
            value={this.state.customer.zipCode}
            placeholder="Enter your zip code"
            label="Zip Code"
            ref={this.inputZipCode}
            onChange={this.handleChangeZipCode}
          />
          {this.validationStateZipCode()}
          <Form.Control
            type="text"
            value={
              this.props.customer.city
                ? this.props.customer.city
                : this.state.customer.city
            }
            placeholder="Enter your city"
            label="City"
            ref={this.inputCity}
            onChange={this.handleChangeCity}
          />
          {this.validationStateCity()}
        </Form>
      </div>
    );
  }
}

export default customerdata;
