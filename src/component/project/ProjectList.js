import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList =({post}) =>{
    return(
        <div className="project-list section">
            {post && post.map(posts=>{
                return(
                    <ProjectSummary post={posts} key={posts.id}/>
                )
            })}
        </div>
    )
}
export default ProjectList;