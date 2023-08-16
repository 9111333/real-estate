import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { BsInstagram } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import { RxTwitterLogo } from "react-icons/rx";
import { ImWhatsapp } from "react-icons/im";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Container, Row, Col } from "react-bootstrap";
import "./HomeP3.css";

function HomeP3() {
  const ulRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(
      "ul li",
      {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      },
      1.2
    );

    const body = document.querySelector("body");
    const img = document.querySelector("li");

    const handleMouseMove = (e) => {
      const xPos = e.clientX / img.clientWidth - 0.5;
      const yPos = e.clientY / img.clientWidth - 0.5;

      gsap.to("li", 1, {
        rotationY: xPos * 15,
        rotationX: yPos * 15,
        ease: "power1.easeOut",
      });
    };

    body.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component is unmounted
    return () => {
      body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>

      <Container fluid className="footerCon">
        <Row className="footerRow">
          <Col>
            <ul ref={ulRef} className="footerUl">
              <li>
                <span>
                  <BsInstagram />
                </span>
                <a href="#">اینستاگرام</a>
              </li>
              <li>
                <span>
                  <LiaTelegram />
                </span>
                <a href="#">تلگرام</a>
              </li>
              <li>
                <span>
                  <RxTwitterLogo />
                </span>
                <a href="#">توئیتر</a>
              </li>
            </ul>
          </Col>
          <Col className="footerCol">
            <ul className="footerUl">
              <li>
                <span>
                  <ImWhatsapp />
                </span>
                <a href="#">واتس اپ</a>
              </li>
              <li>
                <span>
                  <AiOutlinePhone />
                </span>
                <a href="#">تلفن</a>
              </li>
              <li>
                <span>
                  <HiOutlineMail />
                </span>
                <a href="#">ایمیل</a>
              </li>
            </ul>
          </Col>
          <a href="#"></a>
        </Row>
      </Container>
    </>
  );
}

export default HomeP3;
