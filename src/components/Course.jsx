import React from "react";
import Cardsg from "./Cardsg";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookapp-11m1.onrender.com/book");
        console.log(res.data);
        setbook(res.data);
      } catch (error) {
        console.log("error fetch data", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            we are delighted to have you heare
          </h1>
          <p className="mt-10">
          welcome
          </p>
          <Link to="/">
            <button className="bg-pink-500 rounded-md text-white px-4 py-2 hover:bg-pink-700 duration-700">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {book.map((item) => (
            <Cardsg key={item.id} item={item}></Cardsg>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
