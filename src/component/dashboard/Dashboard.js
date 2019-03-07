import React, {Component} from 'react'
import ProjectList from '../project/ProjectList'
import {connect} from 'react-redux'
class Dashboard extends Component {
    render(){
        const {posts} = this.props;
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m5">
                    <ProjectList post={posts}/>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToPros = (state)=>{
    return({
        posts:state.post.posts
    })
}
export default connect(mapStateToPros)(Dashboard);