import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Base.css'
import avi from '../../assets/svgs/codedcoder.svg'
import navLine from '../../assets/svgs/menu-line.svg'
import logo from '../../assets/svgs/coded.svg'
import arrow from '../../assets/svgs/arrow.svg'

export class Base extends Component {

  render() {

    return (
      
      <div className='base_container'>
        <div className="hero">
          <div className="intro_box">
            <h1> <span className='desktop_grt'>Hi,</span> <span className='mobile_grt'>Hi,</span> <br/> I'm Busola.</h1>
            <div className='avi'><img src={avi} alt="avatar"/></div>
          </div>

          <div className="description">
            <p> <span>some text</span> <span className='highlight'>more</span><span> text</span> <span className='highlight'>extra </span> <span> text</span></p>
          </div>

          <div className="go_button_container">
            <Link to='/resume'> <button>Explore ➜</button></Link>
          </div>

        </div>
  

        <nav>
          <ul>

            <li className={this.props.menu[1]}>
              <small>01 <Link to='/resume'><img src={navLine} alt="menu bullet"/> RESUME</Link></small>
            </li>
            <li className={this.props.menu[0]}>
              <small>02 <Link to='/work'><img src={navLine} alt="menu bullet"/> WORK</Link></small>
            </li>

            <li className={this.props.menu[2]}>
            <small>03 <Link to='/contact'><img src={navLine} alt="menu bullet"/> CONTACT</Link></small>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <img src={logo} alt=""/>
          <div className="social">
            <a href='https://github.com/codedcoderr' target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i> Github <img src={arrow} alt="pointer"/></a>
            <a href='https://twitter.com/codedcoder' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'></i> Twitter <img src={arrow} alt="pointer"/></a>
          </div>
        </div>
      </div>
    )
  }

}

export default Base
