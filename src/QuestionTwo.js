import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class QuestionTwo extends Component {

    state = {
        isDisabled: true,
        selected: []
    };

    render () {
        const onChange = (answer) => {
            const value = answer.target.value
            this.setState(state => {
                const selected = state.selected
                selected.push(value.substring(3, answer.length))
                let final = [...new Set(selected)]
                return {
                    selected: final,
                    isDisabled: false
                }
            })
        }

        return (
            <div>
                <h1>{this.props.questions[1].question}</h1>
                {this.props.questions[1].options.map((o, i) => {
                    return (
                        <div key={i} >
                            <input type="checkbox" id={i} name="answer_2" onChange={onChange} value={o} />
                            <label htmlFor={i}>{o}</label>
                        </div>
                    );
                })}
                <Link to="/summary" onClick={this.props.onSubmitted.bind(this, this.state.selected)}><button style={{ padding: "10px", border: "1px solid black", marginTop: "10px" }} disabled={this.state.isDisabled}>Next</button></Link>
            </div>
        )
    }
}

