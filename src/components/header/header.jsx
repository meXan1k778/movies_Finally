/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import debounce from 'lodash.debounce';
import './header.css';

export default class Header extends React.Component {
  debounceRequest = debounce((value) => this.props.onChange(value), 450);

  sendRequest = (e) => {
    this.debounceRequest(e.target.value);
  };

  render() {
    return (
      <div className="header">
        <div className="header__buttons">
          <button type="button">Search</button>
          <button type="button">Rated</button>
        </div>
        <div className="header__search">
          <input type="search" placeholder="type to search..." onChange={this.sendRequest} />
        </div>
      </div>
    );
  }
}
