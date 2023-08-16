import React from "react";
import "./ProductsP.css";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../Components/Cards/Cards";
import { Link } from "react-router-dom";

export default function ProductsP() {
  return (
    <>
      <div className="menuP-holder">
        <div className="back">
         <Link to={'/'}><p>بازگشت به صفحه اصلی</p></Link> 
        </div>
        <div className="fifteen-parts">
          <Container>
            <Row className="gsap-menu-rows">
              <Col className="text-center gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="1"
                    title="خانه شماره یک"
                    date="13 خرداد"
                    pix="../../../public/images/f1.jpg"
                    address="/gsap1"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="2"
                    title="خانه شماره دو"
                    date="10 شهریور"
                    pix="../../../public/images/f2.jpg"
                    address="/gsap2"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="3"
                    title="خانه شماره سه"
                    date="26 دی"
                    pix="../../../public/images/f3.jpg"
                    address="/gsap3"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="4"
                    title="خانه شماره چهار"
                    date="3 آبان"
                    pix="../../../public/images/f4.jpg"
                    address="/gsap4"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="5"
                    title="خانه شماره پنج"
                    date="16 اردیبهشت"
                    pix="../../../public/images/f5.jpg"
                    address="/gsap5"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="6"
                    title="خانه شماره شش"
                    date="9 بهمن"
                    pix="../../../public/images/f6.jpg"
                    address="/gsap6"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="7"
                    title="خانه شماره هفت"
                    date="12 تیر"
                    pix="../../../public/images/f7.jpg"
                    address="/gsap7"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="8"
                    title="خانه شماره هشت"
                    date="29 فروردین"
                    pix="../../../public/images/f8.jpg"
                    address="/gsap8"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="9"
                    title="خانه شماره نه"
                    date="4 مهر"
                    pix="../../../public/images/f9.jpg"
                    address="/gsap9"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="10"
                    title="خانه شماره ده"
                    date="13 آذر"
                    pix="../../../public/images/f10.jpg"
                    address="/gsap10"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="11"
                    title="خانه شماره یازده"
                    date="22 تیر"
                    pix="../../../public/images/f11.jpg"
                    address="/gsap11"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="12"
                    title="خانه شماره دوازده"
                    date="8 بهمن"
                    pix="../../../public/images/f12.jpg"
                    address="/gsap12"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="13"
                    title="خانه شماره سیزده"
                    date="18 اسفند"
                    pix="../../../public/images/f13.jpg"
                    address="/gsap13"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="14"
                    title="خانه شماره چهارده"
                    date="17 آذر"
                    pix="../../../public/images/f14.jpg"
                    address="/gsap14"
                  />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col" md="4" sm="12">
                <div className="gsap-child">
                  <Cards
                    number="15"
                    title="خانه شماره پارنزده"
                    date="2 تیر"
                    pix="../../../public/images/f1.jpg"
                    address="/gsap15"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
