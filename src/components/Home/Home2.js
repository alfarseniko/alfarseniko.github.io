import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/haris.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> MYSELF </span>
            </h1>
            <p className="home-about-body">
              I discovered programming as a way to spark up my life.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript, Python, Solidity and Rust. </b>
              </i>
              <br />
              <br />
              I am interested in securing the &nbsp;
              <i>
                <b className="purple">Blockchain </b>space and also to build solutions with {" "}
                <b className="purple">
                  Artificial Intelligence.
                </b>
              </i>
              <br />
              <br />
              I spend my time building projects with  <b className="purple">Foundry</b> and cryptographic solutions with
              <i>
                <b className="purple">
                  {" "}
                  Rust
                </b>
              </i>
              &nbsp;. I also like to innovate solutions with
              <i>
                <b className="purple"> AI</b> .
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">

            <img src={myImg} className="img-fluid" alt="avatar" />

          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alfarseniko"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/0xbhatti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bhatti25/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
