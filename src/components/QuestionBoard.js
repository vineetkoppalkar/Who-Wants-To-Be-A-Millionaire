import React, { Component } from "react";
import "./QuestionBoard.scss";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import Timer from "./Timer";
import ScoreTracker from "./ScoreTracker";

class QuestionBoard extends Component {
  componentDidMount() {
    this.props.onRef(this);
  }

  resetTimer = () => {
    this.timer.reset();
  }

  render() {
    const { question, onOptionSelect, currentScore, nextScore, handleTimerExpire, shuffledOptions } = this.props;

    return (
      <div>
        <ScoreTracker currentScore={currentScore} nextScore={nextScore} />
        {question ? (
          <div>
            <Paper className="question-board">
              <Timer
                onRef={ref => (this.timer = ref)}
                handleTimerExpire={handleTimerExpire}
              />
              <h2 style={{ margin: "15px 0 25px" }}>
                {decodeURIComponent(question.question)}
              </h2>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{ width: "100%" }}
                    onClick={() => onOptionSelect(shuffledOptions[0])}
                  >
                    {shuffledOptions[0] === question.correct_answer
                      ? decodeURIComponent(shuffledOptions[0]) + " [*]"
                      : decodeURIComponent(shuffledOptions[0])}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{ width: "100%" }}
                    onClick={() => onOptionSelect(shuffledOptions[1])}
                  >
                    {shuffledOptions[1] === question.correct_answer
                      ? decodeURIComponent(shuffledOptions[1]) + " [*]"
                      : decodeURIComponent(shuffledOptions[1])}
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{ width: "100%" }}
                    onClick={() => onOptionSelect(shuffledOptions[2])}
                  >
                    {shuffledOptions[2] === question.correct_answer
                      ? decodeURIComponent(shuffledOptions[2]) + " [*]"
                      : decodeURIComponent(shuffledOptions[2])}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    style={{ width: "100%" }}
                    onClick={() => onOptionSelect(shuffledOptions[3])}
                  >
                    {shuffledOptions[3] === question.correct_answer
                      ? decodeURIComponent(shuffledOptions[3]) + " [*]"
                      : decodeURIComponent(shuffledOptions[3])}
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        ) : (
          <div className="question-loading">
            <CircularProgress className="circularProgress" />
          </div>
        )}
      </div>
    );
  }
}

export default QuestionBoard;
