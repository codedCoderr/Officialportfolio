import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    return (
      <div className="resume">
        <div className="resume_container">
          <div className="top_row">
            <h2>Olowu Busola</h2>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/codedcoder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-linkedin"></i> <span>LinkedIn</span>{" "}
                </small>
              </a>
              {/* <a href="./codedcoder's CV.pdf" download target='_blank' rel="noopener noreferrer"><small><i className="fas fa-download"></i> <span>Download </span> </small></a>  */}
            </div>
          </div>

          <p className="subheading">Backend Web Developer</p>

          <div className="summary">
            <p>
              A solution-driven Web-Developer that excels in highly
              collaborative work environments, finds solutions to challenges and
              is focused on customer satisfaction. Proven experience developing
              consumer-focused web sites and meeting the highest standards for
              web design, user experience, best practices, usability, and speed.
              Responding to challenges by designing and developing solutions and
              building web applications aligned to customer's services.
              Translating solutions into code and working across many different
              APIs, third-party integrations and databases
            </p>
          </div>

          <div className="divider">
            <p>Skills</p>
            <span></span>
          </div>

          <div className="skills">
            <p>JAVASCRIPT</p>
            <p>NESTJS</p>
            <p>NODE</p>
            <p>EXPRESS</p>
            <p>MONGODB</p>
            <p>POSTGRES</p>
            <p>SQL</p>
            <p>REACT/REDUX</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className="title">
                Bento Africa - Backend Developer 
                <span>
                  {" "}
                  <br /> MARCH 2021 - PRESENT
                </span>
              </p>
              <article className="description">
                ● Collaborated in a distributed team and authored a number of services jointly running
payroll management and providing HRM services to over 25,000 users. This includes adding
new features, scaling and optimizing as necessary.

● Refactored our existing API services to improve the UX for our users. This includes
heavy-lifting certain processes while keeping systems secure and performant, reducing
the latency of our services and increasing throughput.

● Used a bulletproof node js architecture to encourage loose coupling, separation of
concerns and code consistency.
              </article>
            </section>
            <section className="experience">
              <p className="title">
                Parthian Partners Limited - Software Developer
                <span>
                  {" "}
                  <br /> FEBRUARY 2020 - FEBRUARY 2021
                </span>
              </p>
              <article className="description">
                ● Actively learned the ropes from experts in the field. 

                ● Took up
                project management roles. 

                ● Documentation of Project
                Implementation Plan, Process Flow. 

                ● Putting together Test Suite
                templates and engaging in end to end testing of finished
                products.

                ● Improved performance on a number of our frontend applications by lazy loading assets and deferring API calls.

                ● Wrote integration tests for all modules.
              </article>
            </section>

            <section className="experience">
              <p className="title">
                HNG Tech - Full Stack Developer (Intern)
                <span>
                  {" "}
                  <br /> AUGUST 2019 - NOVEMBER 2019
                </span>
              </p>
              <article className="description">
                <p>
                  An Internship organized by hotels.ng and sponsored by
                  flutterwave that involves developing interns through
                  collaboration, project management and also time management. I
                  was team lead for two projects during the internship and I
                  learnt valuable skills that have made me a better developer.{" "}
                </p>
                <p>
                  I led a team into building a file sharing application,
                  xshare.ga (built with MongoDB. Express, React/Redux, Node)
                  that converts files, uploads them into a server and then
                  converts them into sharable links. These links can be shared
                  via email, socials(facebook,twitter,whatsapp) or it can just
                  be copied directly and pasted as you see fit.
                </p>
                <p>
                  I led a team into building a finance tracker application
                  (built with MongoDB. Express, React/Redux, Node) that helps
                  keep track of the user's expenses
                  https://financetracker-triptolemus.herokuapp.com .
                </p>
                <p>
                  I was part of the team that built trim.ng (built with MongoDB.
                  Express, Node and EJS), an application that shortens long
                  links into short / customizable links.
                </p>
              </article>
            </section>
          </div>

          <div className="divider">
            <p>Education</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className="title">
                Babcock University - Computer Science (Technology)
                <span>
                  {" "}
                  <br /> 2010-2015
                </span>
                <article className="description">
                  <p>
                    This was an extensive learning period that lasted over 4
                    years and covered all the required aspects surrounding
                    Computer Science and Software Engineering
                  </p>
                </article>
              </p>
            </section>
          </div>
        </div>

        <div className="go_button_container">
          <Link to="/">
            {" "}
            <button>
              {" "}
              <b>➜ </b> Home
            </button>
          </Link>
          <Link to="/work">
            {" "}
            <button>Work ➜ </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
