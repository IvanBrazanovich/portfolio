import React from "react";
import me_pic from "../assets/images/me_pic.jpeg";
import background from "../assets/images/banner-bg.png";
import pdfResume from "../assets/pdf/BrazanovichIvan.pdf";

const About = () => {
  // Function will execute on click of button
  const downloadResume = async () => {
    // // using Java Script method to get PDF file
    // fetch("SamplePDF.pdf").then((response) => {
    //   response.blob().then((blob) => {
    //     // Creating new object of PDF file
    //     const fileURL = window.URL.createObjectURL(blob);
    //     // Setting various property values
    //     let alink = document.createElement("a");
    //     alink.href = fileURL;
    //     alink.download = "SamplePDF.pdf";
    //     alink.click();
    //   });
    // });

    const fetchResumeFirst = await fetch(pdfResume);
    const blobResume = await fetchResumeFirst.blob();
    // Creating new object of PDF file
    const fileURL = window.URL.createObjectURL(blobResume);
    // Setting various property values
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "BrazanovichIvan.pdf";
    alink.click();
  };
  return (
    <div
      id="about"
      className="about     backdrop-brightness-50   "
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="w-full h-full  tl:p-5 p-10 bg-gray-900/50  ">
        <div className=" tl:flex-col flex justify-center lg:w-full lg2:w-3/4 tl:content-center  tl:flex-wrap w-2/3  m-auto gap-6 ">
          <img
            src={me_pic}
            className=" w-1/3 tl:w-full rounded-lg object-cover "
          />

          <div className=" tl:w-full w-1/2 text-white flex gap-5  flex-col ">
            Hey! my name is Brazanovich Ivan and I am a web developer. I
            discovered my love for programming when I was just 15 years old and
            ever since then, I have been honing my skills and knowledge in this
            field. Over the years, I have specialized in fullstack development,
            with a particular focus on React js.
            <p>
              What I enjoy the most about programming is the logic behind it. I
              am constantly amazed by how a few lines of code can create such
              complex applications. For this reason, I tend to gravitate towards
              larger projects that require a great deal of planning and
              strategic thinking.
            </p>
            <p>
              I am always looking for new opportunities to challenge myself and
              grow as a developer. I am excited to see where my skills will take
              me next, and I look forward to creating even more innovative and
              impactful projects.
            </p>
            <button
              onClick={downloadResume}
              className=" cursor-pointer border-2 border-[#b0aaaa] font-bold text-white bg-gradient-to-tr from-cyan-500 to-[#b004b0] p-4 rounded-2xl"
            >
              Download My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
