import React from "react";

const Cardsg = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-4 p-3 px-3 bg bg-white  ">
        <div className="card m-auto w-[15rem] md:w-[11rem] lg:w-[15rem] xl:w-[23rem] bg-base-100  shadow-xl ">
          <figure >
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body bg-blue-950 rounded-badge">
            <h2 className={item.name}>
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions flex justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 border-white border-[2px] rounded-full  hover:bg-black duration-200">
                Buy now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardsg;
