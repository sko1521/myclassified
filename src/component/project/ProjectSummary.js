import React from 'react'

const ProjectSummary =({post}) =>{
    return(
        <div className="card z-depth-0 card-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{post.title}</span>
            <p>{post.content}</p>
            <p className="grey-text">05 march 2019</p>
        </div>
    </div>
    )
}
export default ProjectSummary;