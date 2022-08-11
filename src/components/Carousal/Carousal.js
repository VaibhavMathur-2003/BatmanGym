import React from "react";
import Slider from "react-slick-slider";
import "./Carousal.css"

const Carousal = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
    <div style={{backgroundColor:"black", paddingBottom:"25px"}}>
    <Slider {...settings} className="slider">
      <div>
        <img
          src="https://cdn.europosters.eu/image/hp/66923.jpg"
          alt=""
        />
      </div>

      <div>
        <img
          src="https://images.wallpaperscraft.com/image/single/gym_weightlifting_disks_118224_2048x1152.jpg"
          alt=""
        />
      </div>
      <div>
        <img src="https://4kwallpapers.com/images/walls/thumbs_2t/929.jpg" alt="" />
      </div>
      <div>
        <img
          src="https://images.hdqwalls.com/download/joker-cyberpunk-z9-1920x1080.jpg"
          alt=""
        />
      </div>
    </Slider>
    <div className="quote">
    Bᴇ Tʜᴇ Vᴇɴɢᴇaɴᴄᴇ
    </div>
    </div>
    </>
  );
};

export default Carousal;
