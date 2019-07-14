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
    };
  }

  render() {
    return (
      <div className="row">
        <h1 className="text-center">Form Validation</h1>
        <form>
          <h3>Name:</h3>
          <input type="text" placeholder="Enter your name" name="name" />
          <h3>Email:</h3>
          <input type="text" placeholder="Enter your email" name="email" />
          <h3>Phone:</h3>
          <input
            type="text"
            placeholder="Enter your phone number"
            name="phone"
          />
          <h3>Blog URL:</h3>
          <input type="text" placeholder="Enter your blog URL" name="link" />
          <div className="small-6 small-centered text-center columns">
            <a href="#" className="button success expand round text-center">
              Verify
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
