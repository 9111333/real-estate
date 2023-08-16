import React, { useEffect } from "react";
import { gsap, Power2, Power0 } from "gsap";
import "./RentP.css";
import { Link } from "react-router-dom";

function Sale() {
  useEffect(() => {
    var tl = gsap.timeline();

    tl.to(".line--top", { width: "100%", duration: 0.6, ease: Power2.easeIn })
      .to(".line--right", {
        height: "100%",
        duration: 0.6,
        ease: Power0.easeNone,
      })
      .to(".line--bottom", {
        width: "100%",
        duration: 0.6,
        ease: Power0.easeNone,
      })
      .to(".line--left", {
        height: "100%",
        duration: 0.6,
        ease: Power2.easeOut,
      })
      .from(".mask", { right: "100%", duration: 1 })
      .to(".text", { opacity: 1, duration: 0.8 })
      .to(".text2", { opacity: 1, duration: 0.8 });
  }, []);

  return (
    <>
      <div>
        <div className="line line--top"></div>
        <div className="line line--right"></div>
        <div className="line line--bottom"></div>
        <div className="line line--left"></div>

        <div className="mask"></div>

        <div className="text-center">
          <h1 className="text"><Link to={"/Products"}>موارد جدید برای اجاره</Link></h1>
          <h3 className="text2"><Link to={"/"}>بازگشت به صفحه اصلی</Link></h3>
        </div>
      </div>
      
    </>
  );
}

export default Sale;