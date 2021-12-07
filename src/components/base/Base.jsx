import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Base.css';
import avi from '../../assets/svgs/codedcoder.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import logo from '../../assets/svgs/coded.svg';
import arrow from '../../assets/svgs/arrow.svg';

export class Base extends Component {
  render() {
    return (
      <div className='base_container'>
        <div className='hero'>
          <div className='intro_box'>
            <h1>
              {' '}
              <span className='desktop_grt'>Hi,</span>{' '}
              <span className='mobile_grt'>Hi,</span> <br /> I'm Busola.
            </h1>
            <div className='avi'>
              <img src={avi} alt='avatar' />
            </div>
          </div>

          <div className='description'>
            <p>
              {' '}
              <span>
                I am a Software Engineer with a passion for building things and
                using code to solve every day problems.{' '}
              </span>{' '}
              <span className='highlight'>
                I participate actively in mentoring young and upcoming
                developers in Africa as I believe the future is here in Africa.{' '}
              </span>{' '}
              <span>
                {' '}
                I am always hungry for new knowledge as I know I have only
                scratched the surface and i'm really looking forward to where
                this journey leads me.{' '}
              </span>
            </p>
          </div>

          <div className='go_button_container'>
            <Link to='/resume'>
              {' '}
              <button>Explore ➜</button>
            </Link>
          </div>
        </div>

        <nav>
          <ul>
            <li className={this.props.menu[1]}>
              <small>
                01{' '}
                <Link to='/resume'>
                  <img src={navLine} alt='menu bullet' /> RESUME
                </Link>
              </small>
            </li>
            <li className={this.props.menu[0]}>
              <small>
                02{' '}
                <Link to='/work'>
                  <img src={navLine} alt='menu bullet' /> WORK
                </Link>
              </small>
            </li>

            <li className={this.props.menu[2]}>
              <small>
                03{' '}
                <Link to='/contact'>
                  <img src={navLine} alt='menu bullet' /> CONTACT
                </Link>
              </small>
            </li>
          </ul>
        </nav>

        <div className='footer'>
          <a href='https://codedcoder.com'>
            <img src={logo} alt='codedcoder logo' />
          </a>

          <div className='social'>
            <a
              href='https://github.com/codedcoderr'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-github'></i> Github{' '}
              <img src={arrow} alt='pointer' />
            </a>
            <a
              href='https://twitter.com/codedcoder'
              target='_blank'
              rel='noopener noreferrer'>
              <i className='fab fa-twitter'></i> Twitter{' '}
              <img src={arrow} alt='pointer' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Base;
