import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'
import Project from '../utils/project/Project'
import uuid from 'react-uuid';

export class Work extends Component {

 
  state = {
    projects: [

      {
        id: uuid(),
        title: 'codedcoder',
        description: 'My Portfolio Site',
        github: 'https://github.com/codedcoderr/',
        live: 'https://codedcoder.com',
        stack: 'React',
        isPrivate: false
      },

      
    ]
  }

  componentDidMount() {
    this.props.activeMenu(1)
  }

  render() {
    return (
      <div className='work'>
        <div className="portfolio_showcase">
          {this.state.projects.map((project) => ( <Project key={project.id} data={project} /> ))}
        </div>

        <div className="go_button_container">
            <Link to='/resume'> <button> <b>➜ </b> Resume</button></Link>
            <Link to='/contact'> <button>Contact ➜ </button></Link>  
        </div>
      </div>
    )
  }
}

export default Work
