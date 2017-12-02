import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Letters.css';

export default class Letters extends Component {
  constructor(props) {
    super(props);
  }
  eventFunction(e) {
    this.props.returnChar(e.target.innerHTML);
  }

  render() {
    return (
      <div>
        <p>
          {this.props.letters.map(item => (
            <button
              key={item.letter}
              class={item.isVisible ? css.inline : css.hide}
              onClick={e => this.eventFunction(e)}
            >
              {item.letter}
            </button>
          ))}
        </p>
      </div>
    );
  }
}
