import BgImg from "@/assets/img/bg/inner-hero1-bg.jpeg";
import hero1 from "@/assets/img/images/inner-hero-image1.png";
import shape from "@/assets/img/shapes/inner-hero-shape.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div
        className="inner-hero1 pt-60"
        style={{ backgroundImage: `url(${BgImg.src})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="main-heading1">
                <h1>Pricing Plan</h1>
              </div>
            </div>
            <div className="col-md-7">
              <div className="images">
                <Image src={hero1} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sec-shape">
          <Image src={shape} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
