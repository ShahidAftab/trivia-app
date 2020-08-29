import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class QuestionOne extends Component {

    state = {
        isDisabled: true,
        selected: ""
    };

    render() {
        const onChange = (answer) => {
            this.setState({
                selected: answer.target.value.substring(3, answer.length),
                isDisabled: false
            })
        }

        return (
            <div>
                <h1>{this.props.questions[0].question}</h1>
                {this.props.questions[0].options.map((o, i) => {
                    return (
                        <div key={i} >
                            <input type="radio" id={i} name="answer_1" onChange={onChange} value={o} />
                            <label htmlFor={i}>{o}</label>
                        </div>
                    );
                })}
                <Link to="/question/two" onClick={this.props.onSubmitted.bind(this, this.state.selected)}><button style={{ padding: "10px", border: "1px solid black", marginTop: "10px" }} disabled={this.state.isDisabled}>Next</button></Link>
            </div>
        )
    }
}

