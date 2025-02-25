import React from "react";
import { Carousel } from "antd";
import Styles from "@/shared/components/Sliders/sliders.module.scss";

const contentStyle = {
  height: "460px",
  color: "#fff",
  background: "#364d79",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", // Hatalı yazılmıştı, düzelttim
  gap: "8px", // Daha iyi hizalama için boşluk artırıldı
  textAlign: "center", // Metinlerin ortalanması için eklendi
};

const AboutSlider = () => {
  return (
    <div className={Styles.aboutSliderContainer}>
      <Carousel
        autoplay={{
          dotDuration: true,
        }}
        autoplaySpeed={2000}
      >
        <div>
          <div style={contentStyle}>
            <img
              width={136}
              height={291}
              style={{ objectFit: "contain" }}
              src="/assets/images/AboutImages/image1.png"
              alt="image1"
            />
            <h2>Ethan Cole</h2>
            <p>Founder & Chairman</p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              width={156}
              height={310}
              style={{ objectFit: "contain" }}
              src="/assets/images/AboutImages/image2.png"
              alt="image2"
            />
            <h2>Olivia Mercer </h2>
            <p>Managing Director</p>
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              width={156}
              height={310}
              style={{ objectFit: "contain" }}
              src="/assets/images/AboutImages/image3.png"
              alt="image3"
            />
            <h2>Liam Hayes</h2>
            <p>Product Designer</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default AboutSlider;
