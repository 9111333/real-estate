import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import "./MenuGsap.css";
import { Link } from "react-router-dom";

function MenuGsap(props) {
  const [selectedCaption, setSelectedCaption] = useState("");

  const captions = {
    0: (
      <p className="PtextB">
        حمام{" "}
        <p className="Ptext">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم استلورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
        </p>
      </p>
    ),
    1: (
      <p className="PtextB">
        اتاق پذیرایی
        <p className="Ptext">
          لورم ایپسوم متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
          استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم متن
          ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
          گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است
        </p>
      </p>
    ),
    2: (
      <p className="PtextB">
        آشپزخانه
        <p className="Ptext">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از از طراحان گرافیک است،
          چاپگرها و متون بل صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
          و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم استلورم ایپسوم
          متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
          گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
          لازم است
        </p>
      </p>
    ),
  };

  const handleSelect = (index) => {
    setSelectedCaption(captions[index] || "");
  };

  return (
    <>
      <Container className="gmcont">
        <Row className="menugsaprow">
          <div className="p-holder">
            <Link to={"/"}>
              <p>بازگشت به صفحه اصلی</p>
            </Link>
          </div>
          <Col md="7" className="menugsapcol7">
            <Carousel onSelect={handleSelect} className="carouselll">
              <Carousel.Item>
                <img
                  id="images"
                  className="d-block w-100"
                  src={props.image1}
                  alt="Image 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  id="images"
                  className="d-block w-100"
                  src={props.image2}
                  alt="Image 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  id="images"
                  className="d-block w-100"
                  src={props.image3}
                  alt="Image 3"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md="5" className="col5">
            <div className="here">
              {selectedCaption && <p>{selectedCaption}</p>}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MenuGsap;
