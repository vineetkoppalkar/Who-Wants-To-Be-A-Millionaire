import React, { Component } from "react";
import "./QuestionBoard.scss";

// import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Timer from './Timer';
import ScoreTracker from './ScoreTracker';

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
          <div>
            <ScoreTracker />
            <Paper className="question-board">
              <Timer />
              <h4 style={{margin: "15px 0 25px"}}>{decodeURIComponent(question.question)}</h4>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{width: "100%"}}
                    onClick={() => onOptionSelect(shuffledOptions[0])}
                  >
                    {shuffledOptions[0] === question.correct_answer ? decodeURIComponent(shuffledOptions[0]) + " [*]" : decodeURIComponent(shuffledOptions[0])}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{width: "100%"}}
                    onClick={() => onOptionSelect(shuffledOptions[1])}
                  >
                    {shuffledOptions[1] === question.correct_answer ? decodeURIComponent(shuffledOptions[1]) + " [*]" : decodeURIComponent(shuffledOptions[1])}
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
                    {shuffledOptions[2] === question.correct_answer ? decodeURIComponent(shuffledOptions[2]) + " [*]" : decodeURIComponent(shuffledOptions[2])}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{width: "100%"}}
                    onClick={() => onOptionSelect(shuffledOptions[3])}
                  >
                    {shuffledOptions[3] === question.correct_answer ? decodeURIComponent(shuffledOptions[3]) + " [*]" : decodeURIComponent(shuffledOptions[3])}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ) : null}
      </div>
    );
  }
}

export default QuestionBoard;
