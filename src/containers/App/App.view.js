import React, { Component } from 'react';
import { connect } from 'react-redux';

import Letters from '../../components/Letters/Letters.view';
import Word from '../../components/Word/Word.view';
import { VISIBLE, NEWWORD, HIDELETTER, SHOWLETTERS } from '../../actions/allActions';

import css from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.words = ['JQUERY', 'HTML', 'LOREM', 'REACT', 'REDUX', 'FULLSTACK', 'ANGULAR', 'GIT', 'MYSQL'];
    this.score = 0;
    this.start = () => {
      this.counter = 0;
      this.chances = 10;
      let num = Math.floor(Math.random() * this.words.length);
      let chosenWord = this.words[num];
      chosenWord = chosenWord.split('');
      let wordArray = [];
      chosenWord.map(item => wordArray.push({ letter: item, isVisible: false }));
      this.props.newword(wordArray);
    };
  }

  componentWillMount() {
    this.start();
  }

  returnChar(char) {
    this.props.lettesButtons.map(item => {
      if (item.letter === char) {
        this.chances--;
        this.props.hideLetter(item.letter);
      }
    });

    this.props.currentWord.map((item, i) => {
      if (item.letter === char && !item.isVisible) {
        this.chances++;
        this.score++;
        this.counter++;
        this.props.visible(item.letter);
      }
      if (this.chances === 0) {
        document.getElementById('msg').innerHTML =
          'Game Over! final score: ' + this.score + '\n\n\n, ' + 'Starting A New Game...';
        document.getElementById('msg').style.visibility = 'visible';
        setTimeout(() => {
          this.score = 0;
          this.start();
          document.getElementById('msg').style.visibility = 'hidden';
        }, 3000);
        this.props.lettesButtons.map(item => {
          this.props.showletters();
        });
      }
      if (this.counter === this.props.currentWord.length) {
        document.getElementById('msg').innerHTML = 'Nice Work! next Round:';
        document.getElementById('msg').style.visibility = 'visible';

        setTimeout(() => {
          this.start();
          document.getElementById('msg').style.visibility = 'hidden';
        }, 3000);
        this.props.lettesButtons.map(item => {
          this.props.showletters();
        });
      }
    });
  }

  render() {
    const { lettesButtons, turnNumber, currentWord } = this.props;
    return (
      <div className={css.main}>
        <h1 className={css.label}>Guess The Word</h1>
        <div className={css.msg} id={'msg'} />
        <Word chosenWord={this.props.currentWord} />
        <Letters letters={lettesButtons} returnChar={char => this.returnChar(char)} />
        <div className={css.liveScore}>
          Lives:{this.chances} | Score:{this.score}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lettesButtons, turnNumber, currentWord } = state;
  return {
    lettesButtons,
    currentWord,
    turnNumber
  };
}

function mapDispatchToProps(dispatch) {
  return {
    visible: letter => dispatch(VISIBLE(letter)),
    newword: wordArray => dispatch(NEWWORD(wordArray)),
    hideLetter: letter => dispatch(HIDELETTER(letter)),
    showletters: letter => dispatch(SHOWLETTERS())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
