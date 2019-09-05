import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import Timer from "./Timer";
import ScoreTracker from "./ScoreTracker";

import "./QuestionBoard.scss";

class QuestionBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowSelecting: true,
      selectedBtnIndex: null,
      firstOptionClass: '',
      secondOptionClass: '',
      thirdOptionClass: '',
      fourthOptionClass: ''
    }
  }
  componentDidMount() {
    this.props.onRef(this);
  }

  setSelectedBtnIndex = (index) => {
    this.setState({
      allowSelecting: false,
      selectedBtnIndex: index
    });
  }

  handleButtonSelect = () => {
    const { selectedBtnIndex } = this.state;
    switch (selectedBtnIndex) {
      case 0:
        this.setState({
          firstOptionClass: "selected-option"
        });
        return;
      case 1:
        this.setState({
          secondOptionClass: "selected-option"
        });
        return;
      case 2:
        this.setState({
          thirdOptionClass: "selected-option"
        });
        return;
      case 3:
        this.setState({
          fourthOptionClass: "selected-option"
        });
        return;
      default:
        return;
    }
  }

  handleCorrectSelectedOptionStyle = () => {
    const { correctAnswerIndex } = this.props;

    switch (correctAnswerIndex) {
      case 0:
        this.setState({
          allowSelecting: false,
          firstOptionClass: "correct-answer"
        });
        return;
      case 1:
        this.setState({
          allowSelecting: false,
          secondOptionClass: "correct-answer"
        });
        return;
      case 2:
        this.setState({
          allowSelecting: false,
          thirdOptionClass: "correct-answer"
        });
        return;
      case 3:
        this.setState({
          allowSelecting: false,
          fourthOptionClass: "correct-answer"
        });
        return;
      default:
        return;
    }
  }

  resetButtonStyles = () => {
    this.setState({
      allowSelecting: true,
      selectedBtnIndex: null,
      firstOptionClass: '',
      secondOptionClass: '',
      thirdOptionClass: '',
      fourthOptionClass: ''
    })
  }

  resetTimer = () => {
    this.timer.reset();
  }

  pauseTimer = () => {
    this.timer.pause();
  }

  render() {
    const { allowSelecting, firstOptionClass, secondOptionClass, thirdOptionClass, fourthOptionClass } = this.state;
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
                    className={`question-option ${firstOptionClass}`}
                    onClick={() => {
                      if (allowSelecting) {
                        this.setSelectedBtnIndex(0);
                        onOptionSelect(shuffledOptions[0]);
                      }
                    }}
                  >
                    {shuffledOptions[0] === question.correct_answer
                      ? decodeURIComponent(shuffledOptions[0]) + " [*]"
                      : decodeURIComponent(shuffledOptions[0])}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    className={`question-option ${secondOptionClass}`}
                    onClick={() => {
                      if (allowSelecting) {
                        this.setSelectedBtnIndex(1);
                        onOptionSelect(shuffledOptions[1])
                      }
                    }}
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
                    className={`question-option ${thirdOptionClass}`}
                    onClick={() => {
                      if (allowSelecting) {
                        this.setSelectedBtnIndex(2);
                        onOptionSelect(shuffledOptions[2])
                      }
                    }}
                  >
                    {shuffledOptions[2] === question.correct_answer
                      ? decodeURIComponent(shuffledOptions[2]) + " [*]"
                      : decodeURIComponent(shuffledOptions[2])}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    className={`question-option ${fourthOptionClass}`}
                    onClick={() => {
                      if (allowSelecting) {
                        this.setSelectedBtnIndex(3);
                        onOptionSelect(shuffledOptions[3])
                      }
                    }}
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
