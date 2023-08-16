import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./HomeP2.css";

gsap.registerPlugin(ScrollTrigger);
function HomeP2() {
  const bgImageRef = useRef(null);

  useEffect(() => {
    const bgImage = bgImageRef.current;

    gsap.fromTo(
      bgImage,
      {
        clipPath: "circle(5% at 77% 40%)",
      },
      {
        clipPath: "circle(75% at 50% 50%)",
        ease: "none",

        scrollTrigger: {
          trigger: bgImage,
          scrub: 1,
          start: "top center",
          end: "top center-=200",
        },
      }
    );
  }, []);
  return (
    <>
      <Container fluid className="conRow">
        <Row className="row">
          <Col>
            <div className="img-container" ref={bgImageRef}>
              <div className="img-container"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomeP2;
