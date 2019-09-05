import React, { Component } from "react";
import axios from "axios";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import CustomAppBar from "./components/CustomAppBar";
import QuestionBoard from "./components/QuestionBoard";
import ScoreBoard from "./components/ScoreBoard";
import LifeLines from "./components/LifeLines";
import WinModal from "./components/WinModal";

import "./App.scss";

const theme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const scoreAmounts = [
  100,
  200,
  300,
  500,
  1000, // 4
  2000,
  4000,
  8000,
  16000,
  32000,
  64000, // 10
  125000,
  250000,
  500000,
  1000000 // 14
];

const reversedScoreAmounts = scoreAmounts.reverse();

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
});

const formattedScoreAmounts = reversedScoreAmounts.map(scoreAmount => formatter.format(scoreAmount));

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const delay = ms => new Promise(res => setTimeout(res, ms));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsData: [],
      curQuestion: null,
      shuffledOptions: [],
      correctAnswerIndex: null,
      curQuestionIndex: 0,
      mobileOpen: false,
      currentScore: formatter.format(0),
      nextScore: formattedScoreAmounts[formattedScoreAmounts.length - 1],
      hasGameEnded: false,
      modalTitle: "Game Over"
    };
  }

  componentWillMount() {
    this.setupGame();
  }

  setupGame = async () => {
    const promises = [
      axios.get(
        "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple&encode=url3986"
      ),
      axios.get(
        "https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple&encode=url3986"
      ),
      axios.get(
        "https://opentdb.com/api.php?amount=5&category=15&difficulty=hard&type=multiple&encode=url3986"
      )
    ];

    await Promise.all(promises)
      .then(allResponses => {
        let questionsData = [];
        allResponses.forEach(res => {
          questionsData = questionsData.concat(res.data.results);
        });

        const curQuestion = questionsData[0];
        const shuffledOptions = shuffle(
          [curQuestion.correct_answer].concat(curQuestion.incorrect_answers)
        );
        const correctAnswerIndex = shuffledOptions.findIndex(option => option === curQuestion.correct_answer);
        
        this.setState({
          questionsData,
          curQuestion,
          shuffledOptions,
          correctAnswerIndex,
          curQuestionIndex: 0,
          currentScore: formatter.format(0),
          nextScore: formattedScoreAmounts[formattedScoreAmounts.length - 1],
          hasGameEnded: false,
          modalTitle: "Game Over"
        });
      })
      .catch(e => console.log(e));
  };

  getCurrentQuestion = () => {
    const { questionsData, curQuestionIndex } = this.state;
    return questionsData[curQuestionIndex];
  };

  verifyAnswer = async option => {
    const { questionsData, curQuestionIndex, hasGameEnded } = this.state;
    const curQuestion = questionsData[curQuestionIndex];
    await delay(100);
    this.questionBoard.handleButtonSelect();
    this.questionBoard.pauseTimer();

    await delay(2000);
    this.questionBoard.handleCorrectSelectedOptionStyle();
    await delay(2000);

    if (curQuestion.correct_answer === option) {
      if (curQuestionIndex !== questionsData.length - 1) {
        const newCurQuestionIndex = curQuestionIndex + 1;
        const newCurQuestion = questionsData[newCurQuestionIndex];
        const shuffledOptions = shuffle(
          [newCurQuestion.correct_answer].concat(newCurQuestion.incorrect_answers)
        );
        const correctAnswerIndex = shuffledOptions.findIndex(option => option === newCurQuestion.correct_answer);
        
        this.setState({
          curQuestion: newCurQuestion,
          shuffledOptions,
          correctAnswerIndex,
          curQuestionIndex: newCurQuestionIndex,
          nextScore: formattedScoreAmounts[formattedScoreAmounts.length - newCurQuestionIndex - 1],
          currentScore: formattedScoreAmounts[formattedScoreAmounts.length - curQuestionIndex - 1]
        });

        this.questionBoard.resetTimer();
        this.questionBoard.resetButtonStyles();
      } else {
        this.setState({
          hasGameEnded: true,
          modalTitle: "Congratulations!",
          nextScore: "——",
          currentScore: formattedScoreAmounts[0]
        })
      }
    } else {
      this.setState({
        hasGameEnded: true,
        modalTitle: "Incorrect"
      })
    }
  };

  handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  handleTimerExpire = async () => {
    this.questionBoard.handleCorrectSelectedOptionStyle();
    await delay(2000);
    this.setState({
      hasGameEnded: true,
      modalTitle: "Ran out of time!"
    });
  }

  resetGame = () => {
    this.setupGame();
    this.questionBoard.resetTimer();
    this.questionBoard.resetButtonStyles();
  }

  render() {
    const {
      curQuestion,
      shuffledOptions,
      correctAnswerIndex,
      mobileOpen,
      curQuestionIndex,
      currentScore,
      nextScore,
      hasGameEnded,
      modalTitle
    } = this.state;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="root">
          <CssBaseline />
          <CustomAppBar
            title="Who Wants to Be a Millionaire"
            handleDrawerToggle={this.handleDrawerToggle}
          />
          <main className="content">
            <QuestionBoard
              onRef={ref => (this.questionBoard = ref)}
              question={curQuestion}
              shuffledOptions={shuffledOptions}
              correctAnswerIndex={correctAnswerIndex}
              onOptionSelect={this.verifyAnswer}
              currentScore={currentScore}
              nextScore={nextScore}
              setCurrentScore={this.setCurrentScore}
              handleTimerExpire={this.handleTimerExpire}
            />
            <span className="author">Made by Vineet Koppalkar</span>
            <div className="life-lines-container">
              <LifeLines />
            </div>
          </main>
          <ScoreBoard
            container={this.props.container}
            mobileOpen={mobileOpen}
            handleDrawerToggle={this.handleDrawerToggle}
            curScoreIndex={curQuestionIndex}
            scoreAmounts={formattedScoreAmounts}
          />

          {hasGameEnded ? (
            <WinModal
              title={modalTitle}
              open={hasGameEnded}
              resetGame={this.resetGame}
              score={currentScore}
              correctAnswer={shuffledOptions[correctAnswerIndex]}
            />
          ) : null}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
