import React, { Component } from 'react'

class SignUp extends Component {

    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''

    }
handleInput =(e) =>{
    this.setState({
        [e.target.id]:e.target.value
    })
}

handleSubmit =(e) =>{
    e.preventDefault();
    console.log(this.state)
}

render() {
    return (
        <div className="container">
            <form className="white" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="firstName">firstName</label>
                    <input type="text" id="firstName" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">lastName</label>
                    <input type="text" id="lastName" onChange={this.handleInput}/>
                </div>                                
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">password</label>
                    <input type="password" id="password" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <button className="btn red lighten-1 z-depth-0">Sign up</button>
                </div>
            </form>
        </div>
    )
    }
}

export default SignUp
