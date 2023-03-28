import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation, Pagination, Autoplay } from "swiper";
import bg from "../assets/images/banner-bg.png";

const skillsArray = [
  {
    title: "HTML",
    icon: "html5",
    type: "brands",
  },
  {
    title: "CSS",
    icon: "css3",
    type: "brands",
  },
  {
    title: "Javascript",
    icon: "js",
    type: "brands",
  },
  {
    title: "ReactJS",
    icon: "react",
    type: "brands",
  },
  {
    title: "Git",
    icon: "git",
    type: "brands",
  },
  {
    title: "Github",
    icon: "github",
    type: "brands",
  },
  {
    title: "NodeJS",
    icon: "node",
    type: "brands",
  },
  {
    title: "MongoDB",
    icon: "database",
    type: "solid",
  },
];

function Skills() {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [iconAmount, setIconAmount] = useState("");

  const changeAmount = () => {
    switch (true) {
      case window.innerWidth > 900:
        setIconAmount(5);
        break;
      case window.innerWidth > 500:
        setIconAmount(3);
        break;

      case window.innerWidth > 400:
        setIconAmount(2);
        break;

      default:
        setIconAmount(2);
        break;
    }
  };

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    changeAmount();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    changeAmount();
  }, []);

  return (
    <>
      <div
        id="skills"
        style={{ backgroundImage: `url(${bg})` }}
        className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
      >
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <div className="box flex  justify-between  items-center bg-[#171717] ">
            <Swiper
              slidesPerView={iconAmount}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              autoplay
              navigation={true}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper "
            >
              {skillsArray.map((skill, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="bg-[#171717] flex flex-col aspect-square	"
                  >
                    <i
                      className={`fa-${skill.type} fa-${skill.icon} border-[1px] aspect-square border-white p-2 rounded-[100%] hover:bg-white text-4xl    lg2:text-4xl lg:text-3xl tl:text-xl  hover:text-black`}
                    ></i>
                    <h1 className="font-bold text-4xl  lg2:text-4xl lg:text-3xl tl:text-xl my-2">
                      {skill.title}
                    </h1>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
