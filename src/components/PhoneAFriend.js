import React, { Component } from 'react';

class AudiencePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: ''
    }
  }

  componentDidMount() {
    const { options, correctAnswerIndex } = this.props;
    const letter = String.fromCharCode(97 + correctAnswerIndex);
    const answer = this.getAnswerText(letter, options[correctAnswerIndex]);
    this.setState({ answer });
  }

  getAnswerText = (letter, answer) => {
    const randomInt = this.getRandomInt(0, 3);
    switch (randomInt) {
      case 0:
        return `Hey, this is a tough one. I am not 100% sure but if I had to guess I'd say (${letter}) "${decodeURIComponent(answer)}". Good luck!`;
      case 1:
        return `Hello, this is a tricky question. I am not familiar with this game but I am leaning towards (${letter}) "${decodeURIComponent(answer)}". Good luck!`;
      case 2:
        return `Hi, this is an easy one!. It has to be (${letter}) "${decodeURIComponent(answer)}". Good luck!`;
      case 3:
        return `Oh! I've played this game before but I can't seem to recall the answer. I think it is (${letter}) "${decodeURIComponent(answer)}" but I am not certain. Good luck!`;
      default:
        return "Oh man! Your guess is as good as mine. I have no clue, sorry. Good luck!";
    }
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {
    const { answer } = this.state;
    return (
      <p style={{margin: "20px"}}>{ answer }</p>
    );
  }
}

export default AudiencePoll;
