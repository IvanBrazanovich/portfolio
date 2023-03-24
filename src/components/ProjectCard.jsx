import React, { useState } from "react";
import Modal from "./modal/Modal";
import ModalProject from "./ModalProject";

function ProjectCard({ item }) {
  const [modal, setModal] = useState();

  return (
    <>
      <div className="img-box  w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="" className="w-full" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
          <button
            onClick={(e) => setModal(true)}
            className="  text-white text-2xl mt-5 border-b-4 hover:bg-white hover:text-black transition-all p-3 rounded-md"
          >
            Know More
            <i className="fa-solid  fa-arrow-right text-lg  p-[2px] "></i>{" "}
          </button>
        </div>
      </div>

      {modal && (
        <Modal setModal={setModal}>
          <ModalProject item={item} />
        </Modal>
      )}
    </>
  );
}

export default ProjectCard;
