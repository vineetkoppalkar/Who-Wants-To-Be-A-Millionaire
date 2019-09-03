import React, { Component } from "react";
import axios from "axios";

import CssBaseline from "@material-ui/core/CssBaseline";
import CustomAppBar from "./components/CustomAppBar";
import QuestionBoard from "./components/QuestionBoard";
import ScoreBoard from "./components/ScoreBoard";

import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsData: [],
      curQuestion: null,
      curQuestionIndex: 0,
      mobileOpen: false
    };
  }

  componentWillMount() {
    this.generateQuestions();
  }

  generateQuestions = async () => {
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
        this.setState({
          questionsData,
          curQuestion: questionsData[0]
        });
      })
      .catch(e => console.log(e));
  };

  getCurrentQuestion = () => {
    const { questionsData, curQuestionIndex } = this.state;
    return questionsData[curQuestionIndex];
  };

  verifyAnswer = option => {
    const { questionsData, curQuestionIndex } = this.state;
    const curQuestion = questionsData[curQuestionIndex];

    if (curQuestion.correct_answer === option) {
      alert("You are correct!");

      if (curQuestionIndex !== questionsData.length - 1) {
        const newCurQuestionIndex = curQuestionIndex + 1;

        this.setState({
          curQuestion: questionsData[newCurQuestionIndex],
          curQuestionIndex: newCurQuestionIndex
        });
      }
    } else {
      alert(
        `You are wrong! The correct answer is: ${curQuestion.correct_answer}`
      );
    }
  };

  handleDrawerToggle = () => {
    const { mobileOpen } = this.state;
    this.setState({ mobileOpen: !mobileOpen });
  };

  render() {
    const { curQuestion, mobileOpen } = this.state;
    return (
      <div className="root">
        <CssBaseline />
        <CustomAppBar 
          title="Who Wants to Be a Millionaire"
          handleDrawerToggle={this.handleDrawerToggle}
        />
        <main className="content">
          <QuestionBoard
            question={curQuestion}
            onOptionSelect={this.verifyAnswer}
          />
        </main>
        <ScoreBoard 
          container={this.props.container}
          mobileOpen={mobileOpen}
          handleDrawerToggle={this.handleDrawerToggle}
        />
      </div>
    );
  }
}

export default App;
