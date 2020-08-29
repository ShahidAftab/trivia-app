import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Summary extends Component {
    

    render() {
        const user = this.props.state.users.find((u) => {
            return u.id === this.props.state.currentUserId
        })

        return (
            <div>
                <h1>Hello {this.props.state.currentUser}</h1>
                <p>Here are the answers selected:</p>
                { user.answer1 }
                <br/>
                { user.answers2.map((a, i) => {
                    return (<span key={i}>{a}{i !== user.answers2.length - 1 ? <span >, </span> : ''}</span>);
                }) }
                <div>
                    <Link to="/"  style={{ textDecoration: "none", textTransform: "uppercase", margin: "10px" }}><button style={{ padding: "10px", border: "1px solid black", marginTop: "10px" }}>Finish</button></Link>
                    <Link to="/history"  style={{ textDecoration: "none", textTransform: "uppercase" }}><button style={{ padding: "10px", border: "1px solid black", marginTop: "10px" }}>History</button></Link>
                </div>
            </div>
        )
    }
}
