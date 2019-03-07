import React, { Component } from 'react'

class CreateProject extends Component {

    state={
        Title:'',
        Content:''
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
                <h5 className="grey-text text-darken-3">Add post</h5>
                <div className="input-field">
                    <label htmlFor="Title">Title</label>
                    <input type="text" id="Title" onChange={this.handleInput}/>
                </div>
                <div className="input-field">
                    <label htmlFor="Content">Content</label>
                    <textarea className="materialize-textarea" id="Content" onChange={this.handleInput}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn red lighten-1 z-depth-0">Post</button>
                </div>
            </form>
        </div>
    )
    }
}

export default CreateProject
