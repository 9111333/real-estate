import React from "react";
import './ContactP.css'
import { Link } from "react-router-dom";

function ContactP() {
  return (
    <div className="content-container">
      <h2>تماس با ما</h2>
      <Link to={'/'}><p>بازگشت به صفحه اصلی</p></Link>

      <div className="form-container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">نام</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">نام خانوادگی</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="mail">ایمیل</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="mail"
                name="mail"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">متن درخواست</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="ارسال" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactP;


