import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Word.css';

class Word extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.chosenWord) {
      this.myWord = this.props.chosenWord;
    } else {
      this.myWord = [];
    }

    return (
      <div>
        {this.myWord.map((item, i) => {
          if (item.isVisible === false) {
            return (
              <span key={i} class={css.board}>
                _
              </span>
            );
          } else {
            return (
              <span key={i} class={css.board}>
                {item.letter}
              </span>
            );
          }
        })}
      </div>
    );
  }
}

export default Word;
