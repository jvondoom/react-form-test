import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isNameValid: false,
      isPhoneValid: false,
      isUrlValid: false,
      name: '',
      phone: '',
      email: '',
      url: '',
    };

    this.inputOnChangeHandler = this.inputOnChangeHandler.bind(this);
    this.validateClickHandler = this.validateClickHandler.bind(this);
  }

  validateName = () => {
    if (
      this.state.name.length < 3 ||
      this.state.name.length >= 30 ||
      !/^[a-zA-Z]*$/.test(this.state.name)
    ) {
      return false;
    }
    return true;
  };

  validateClickHandler = e => {
    e.preventDefault();

    this.setState({
      isNameValid: this.validateName(),
    });
  };

  inputOnChangeHandler = e => {
    const {name, value} = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>Name:</h3>
          <input
            type="text"
            value={this.state.name}
            onChange={this.inputOnChangeHandler}
            placeholder={
              this.state.name === '' ? 'Enter your name' : this.state.name
            }
            name="name"
          />
          <h3>Email:</h3>
          <input
            type="text"
            value={this.state.email}
            onChange={this.inputOnChangeHandler}
            placeholder={
              this.state.email === '' ? 'Enter your email' : this.state.email
            }
            name="email"
          />
          <h3>Phone:</h3>
          <input
            type="text"
            value={this.state.phone}
            onChange={this.inputOnChangeHandler}
            placeholder={
              this.state.phone === ''
                ? 'Enter your phone number'
                : this.state.phone
            }
            name="phone"
          />
          <h3>Blog URL:</h3>
          <input
            type="text"
            value={this.state.url}
            onChange={this.inputOnChangeHandler}
            placeholder={
              this.state.url === '' ? 'Enter your url' : this.state.url
            }
            name="url"
          />
          <div className="small-6 small-centered text-center columns">
            <a
              onClick={this.validateClickHandler}
              className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
