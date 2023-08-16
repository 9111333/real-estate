import React, { useRef, useState, useEffect } from "react";
import "./HomeP.css";
import { gsap } from "gsap";
import { Container, Row, Col } from "react-bootstrap";
import HomeP2 from "../../Components/HomeP2/HomeP2";
import HomeP3 from "../../Components/HomeP3/HomeP3";
import { Link } from "react-router-dom";

function HomeP() {
  // {first part}

  useEffect(() => {
    // Create a timeline
    const tl = gsap.timeline();

    // Animation 1
    tl.from(".menuH", {
      duration: 1,
      y: 500,
      stagger: 0.2,
      opacity: 0,
    });

    // Animation 2
    tl.from(".leftWrap .leftA img, .leftB img, .leftC img", {
      duration: 1,
      y: 500,
      scale: 1.4,
      stagger: 0.2,
      opacity: 0,
    });

    // Animation 3
    tl.to(".leftWrap .leftA img, .leftB img, .leftC img", {
      duration: 2,
      y: -200,
      stagger: 0.2,
    });
  }, []);

  // Empty dependency array to run the effect once

  return (
    <>
      <Container fluid className="conRow">
        <Row className="row">
          <Col md="3">
            <div className="rightWrap">
              <p className="menuH"><Link to={'/Sale'}>فروش</Link></p>
              <p className="menuH"><Link to={'/Rent'}>اجاره</Link></p>
              <p className="menuH"><Link to={'/About'}>درباره ما</Link></p>
              <p className="menuH"><Link to={'./Contact'}>تماس با ما</Link></p>
            </div>
          </Col>
          <Col md="9" className="leftCol">
            <div className="leftWrap">
              <div className="leftA">
                <img src="../../../public/images/f1.jpg" alt="" />
                <img src="../../../public/images/f2.jpg" alt="" />
                <img src="../../../public/images/f3.jpg" alt="" />
              </div>
              <div className="leftB">
                <img src="../../../public/images/f4.jpg" alt="" />
                <img src="../../../public/images/f5.jpg" alt="" />
                <img src="../../../public/images/f6.jpg" alt="" />
              </div>
              <div className="leftC">
                <img src="../../../public/images/f7.jpg" alt="" />
                <img src="../../../public/images/f8.jpg" alt="" />
                <img src="../../../public/images/f9.jpg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="conRow">
        <Row className="row">
          <HomeP2 />
        </Row>
      </Container>

      <Container fluid className="conRow">
        <Row className="row">
          <HomeP3 />
        </Row>
      </Container>



    </>
  );
}
export default HomeP;
