import React, { Component } from 'react'

export default class History extends Component {
    

    render() {
        return (
            <div>
                <h1>History</h1>
                {this.props.state.users.map((u) => {
                        return (
                            <div key={u.id} style={{ margin: "10px", padding: "10px", border: "1px solid black" }}>
                                {u.name}'s Answers:
                                <div>
                                    { u.answer1 }
                                    <br/>
                                    { u.answers2.map((a, i) => {
                                        return (<span key={i}>{a}{i !== u.answers2.length - 1 ? <span >, </span> : ''}</span>);
                                    }) }
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        )
    }
}
