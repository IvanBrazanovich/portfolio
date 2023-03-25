import React from "react";

const ModalProject = ({ item }) => {
  return (
    <div className="box flex flex-col max-h-full overflow-y-auto tl:max-[100vw] max-w-2xl   tl:p-1 py-5 px-12 rounded-lg justify-between  items-center bg-[#171717] ">
      <div className="info flex flex-col text-white">
        <p className="text-3xl self-center font-bold">{item.title}</p>
        <p className="my-3 font-bold text-xl ">{item.description}</p>
      </div>
      <img src={item.img} className=" " />
      <div className="info flex flex-col text-white">
        <div className="mt-3 p-2 flex flex-col gap-1">
          <p className="max-w-xl whitespace-pre-wrap ">
            {item.longDescription}
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-10 text-center ">
          {item.urlGitFront && (
            <a href={`${item.urlGitFront}`} target="_blank">
              <i className="fa-brands fa-github  text-5xl p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
              <p className="text-center"> Front Github Repo</p>
            </a>
          )}
          {item.urlGitBack && (
            <a href={`${item.urlGitBack}`} target="_blank">
              <i className="fa-brands fa-github  text-5xl p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
              <p className="text-center"> Back Github Repo</p>
            </a>
          )}

          <a href={`${item.urlDemo}`} target="_blank">
            <i className="fa-brands fa-xing  text-5xl p-2   hover:bg-white hover:text-black"></i>
            <p className="text-center"> Demo</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
