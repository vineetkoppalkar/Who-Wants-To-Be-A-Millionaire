import React, { Component } from "react";
import "./QuestionBoard.scss";

import Paper from "@material-ui/core/Paper";

class QuestionBoard extends Component {
  render() {
    const { question, onOptionSelect } = this.props;
    return (
      <div>
        {question ? (
          <Paper className="question-board">
            <h3>{question.difficulty}</h3>
            <h3>{unescape(question.question)}</h3>
            <ul>
              <li onClick={() => onOptionSelect(question.correct_answer)}>
                {question.correct_answer}
              </li>
              {question.incorrect_answers.map(incorrect_answer => {
                return (
                  <li
                    key={incorrect_answer}
                    onClick={() => onOptionSelect(incorrect_answer)}
                  >
                    {incorrect_answer}
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
