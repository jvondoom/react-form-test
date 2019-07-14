import React, {Component} from 'react';

import Message from './Message';

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

  validatePhone = () => {
    return /^[0-9]{10}$/.test(this.state.phone);
  };

  validateEmail = () => {
    // eslint-disable-next-line no-useless-escape
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      this.state.email,
    );
  };

  validateUrl = () => {
    // eslint-disable-next-line no-useless-escape
    return /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/.test(
      this.state.url,
    );
  };

  validateClickHandler = e => {
    e.preventDefault();

    this.setState({
      isNameValid: this.validateName(),
      isPhoneValid: this.validatePhone(),
      isEmailValid: this.validateEmail(),
      isUrlValid: this.validateUrl(),
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
            placeholder="Enter your name"
            name="name"
            className="name"
          />
          <h3>Email:</h3>
          <input
            type="text"
            value={this.state.email}
            onChange={this.inputOnChangeHandler}
            placeholder="Enter your email"
            name="email"
            className="email"
          />
          <h3>Phone:</h3>
          <input
            type="text"
            value={this.state.phone}
            onChange={this.inputOnChangeHandler}
            placeholder="Enter your phone number"
            name="phone"
            className="phone"
          />
          <h3>Blog URL:</h3>
          <input
            type="text"
            value={this.state.url}
            onChange={this.inputOnChangeHandler}
            placeholder="Enter your url"
            name="url"
            className="url"
          />
          <div className="small-6 small-centered text-center columns">
            <a
              onClick={this.validateClickHandler}
              className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>

        <Message
          isEmailValid={this.state.isEmailValid}
          isNameValid={this.state.isNameValid}
          isPhoneValid={this.state.isPhoneValid}
          isUrlValid={this.state.isUrlValid}
        />
      </div>
    );
  }
}

export default Form;
