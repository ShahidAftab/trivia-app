import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import QuestionOne from './QuestionOne';
import QuestionTwo from './QuestionTwo';
import Summary from './Summary';
import History from './History';

export class App extends Component {

      state = {
        isDisabled: true,
        currentUser: "",
        currentUserId: 0,
        users: []
      };

  render () {

    const handleQuestionAnswered = (answer) => {
      this.setState(state => {
        const users = state.users.map((u) => {
          if(u.id === state.currentUserId) {
            u.answer1 = answer
            return u;
          } else {
            return u;
          }
        })

        return {
          users,
        };
      });
    }

    const handleQuestionTwoAnswered = (answers) => {
      console.log(answers);
      this.setState(state => {
        const users = state.users.map((u) => {
          if (u.id === state.currentUserId) {
            u.answers2 = answers
            return u;
          } else {
            return u;
          }
        })

        return {
          users
        }
      });
    }

    const questions = [
      {
        type: "single", 
        question: "Who is the best cricketer in the world?",
        options: [
          "A) Sachin Tendulkar",
          "B) Virat Kohli",
          "C) Adam Gilchirst",
          "D) Jacques Kallis"
        ]
      },
      {
        type: "multiple",
        question: "What are the colors in the Indian national flag?",
        options: [
          "A) White",
          "B) Yellow",
          "C) Orange",
          "D) Green"
        ]
      }
    ]

    const handleOnChange = (i) => {
      this.setState({
        currentUser: i.target.value,
        isDisabled: false
      })
    }

    const addUser = () => {
      const newUser = {
        id: this.state.currentUserId + 1,
        name: this.state.currentUser,
        answer1: "",
        answers2: []
      }
      this.setState({
        users: [...this.state.users, newUser],
        currentUserId: this.state.currentUserId + 1
      })
    }


    return (
      <Router>
        <div style={{ marginTop: "20%" }}>
          <center>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <h1>Trivia App</h1>
                <p>What is your name?</p>
                <input style={{ padding: "10px" }} type="text" onChange={handleOnChange} />
                <br/>
                <Link to="/question/one" onClick={addUser}  style={{ textDecoration: "none", textTransform: "uppercase" }}><button style={{ padding: "10px", border: "1px solid black", marginTop: "10px" }} disabled={this.state.isDisabled}>Continue</button></Link>
              </React.Fragment>
            )} />

            <Route path="/question/one" component={() => <QuestionOne questions={questions} onSubmitted={handleQuestionAnswered} state={this.state} />} />
            <Route path="/question/two" component={() => <QuestionTwo questions={questions} onSubmitted={handleQuestionTwoAnswered} state={this.state} />} />
            <Route path="/summary" component={() => <Summary state={this.state} />} />
            <Route path="/history" component={() => <History state={this.state} />} />
          </center>
        </div>
      </Router>
    )
  }
}

export default App
