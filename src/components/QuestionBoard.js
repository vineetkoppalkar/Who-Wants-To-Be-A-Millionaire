import React, { Component } from "react";
import "./QuestionBoard.scss";

import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  style={{width: "100%"}}
                  onClick={() => onOptionSelect(shuffledOptions[0])}
                >
                  {shuffledOptions[0] === question.correct_answer ? shuffledOptions[0] + " [*]" : shuffledOptions[0]}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  style={{width: "100%"}}
                  onClick={() => onOptionSelect(shuffledOptions[1])}
                >
                  {shuffledOptions[1] === question.correct_answer ? shuffledOptions[1] + " [*]" : shuffledOptions[1]}
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  style={{width: "100%"}}
                  onClick={() => onOptionSelect(shuffledOptions[2])}
                >
                  {shuffledOptions[2] === question.correct_answer ? shuffledOptions[2] + " [*]" : shuffledOptions[2]}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  style={{width: "100%"}}
                  onClick={() => onOptionSelect(shuffledOptions[3])}
                >
                  {shuffledOptions[3] === question.correct_answer ? shuffledOptions[3] + " [*]" : shuffledOptions[3]}
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ) : null}
      </div>
    );
  }
}

export default QuestionBoard;
