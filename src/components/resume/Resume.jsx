import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'

export class Resume extends Component {

  componentDidMount() {
    this.props.activeMenu(0)
  }

  render() {
    return (
      <div className='resume'>
        <div className='resume_container'>
          <div className="top_row">
            <h2>Olowu Busola</h2>
            <div className="buttons">
              <a href="https://www.linkedin.com/in/codedcoder" target='_blank' rel="noopener noreferrer"><small><i className="fab fa-linkedin"></i> <span>LinkedIn</span> </small></a> 
              {/* <a href="./codedcoder's CV.pdf" download target='_blank' rel="noopener noreferrer"><small><i className="fas fa-download"></i> <span>Download </span> </small></a>  */}
            </div>
          </div>
          
          <p className='subheading'>Full Stack Web Developer</p>
          
          <div className="summary">
            <p>
              some text here</p>
          </div>

          <div className="divider">
            <p>Skills</p>
            <span></span>
          </div>

          <div className="skills">
            <p>Skills here</p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className='title'>Parthian Partners Limited - Software Developer (Graduate Trainee)<span> <br/> JULY 2020 - PRESENT</span></p>
              <article className='description'>
description              </article>
            </section>

            <section className="experience">
              <p className='title'>HNG Internship - Full Stack Developer (Intern)<span> <br/> JUNE 2020 - AUG 2020</span></p>
              <article className='description'>
                <p>some text </p>
                <p>more text</p>
                <p>extra text</p> 
              </article>
            </section>

           
          </div>

          <div className="divider">
            <p>Education</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
                <p className='title'>Babcock University - Computer Science (Technology)<span> <br/> 2010-2015</span></p>
            </section>
          </div>

        </div>

        <div className="go_button_container">
            <Link to='/'> <button> <b>➜ </b> Home</button></Link>
            <Link to='/work'> <button>Work ➜ </button></Link>  
        </div>
      </div>
    )
  }
}

export default Resume
