import React, { Component } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";

import QuestionBoard from "./components/QuestionBoard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsData: [],
      curQuestion: null,
      curQuestionIndex: 0
    };
  }

  componentWillMount() {
    console.log("componentWillMount()");
    this.generateQuestions();
  }

  generateQuestions = async () => {
    console.log("generateQuestions()");

    const promises = [
      axios.get(
        "https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple"
      ),
      axios.get(
        "https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple"
      ),
      axios.get(
        "https://opentdb.com/api.php?amount=5&category=15&difficulty=hard&type=multiple"
      )
    ];

    await Promise.all(promises)
      .then(allResponses => {
        console.log("Promises resolved");

        let questionsData = [];
        allResponses.forEach(res => {
          questionsData = questionsData.concat(res.data.results);
        });
        console.log(questionsData);
        this.setState({
          questionsData,
          curQuestion: questionsData[0]
        });
        console.log("State set");
      })
      .catch(e => console.log(e));
  };

  getCurrentQuestion = () => {
    const { questionsData, curQuestionIndex } = this.state;
    console.log("Curent question:");
    console.log(questionsData[curQuestionIndex]);
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

  render() {
    const { curQuestion } = this.state;
    return (
      <div>
        <Container maxWidth="md">
          <QuestionBoard
            question={curQuestion}
            onOptionSelect={this.verifyAnswer}
          />
        </Container>
      </div>
    );
  }
}

export default App;
