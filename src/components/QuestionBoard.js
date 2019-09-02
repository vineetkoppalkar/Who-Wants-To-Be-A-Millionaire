import React, { Component } from "react";
import "./QuestionBoard.scss";

import Paper from "@material-ui/core/Paper";

class QuestionBoard extends Component {
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  render() {
    const { question, onOptionSelect } = this.props;
    let shuffledOptions = [];
    if (question) {
      shuffledOptions = this.shuffle(
        [question.correct_answer].concat(question.incorrect_answers)
      );
    }

    return (
      <div>
        {question ? (
          <Paper className="question-board">
            <h3>{unescape(question.question)}</h3>
            <ul>
              {shuffledOptions.map(option => {
                return (
                  <li key={option} onClick={() => onOptionSelect(option)}>
                    {option === question.correct_answer
                      ? option + " [*]"
                      : option}
                  </li>
                );
              })}
            </ul>
          </Paper>
        ) : null}
      </div>
    );
  }
}

export default QuestionBoard;
