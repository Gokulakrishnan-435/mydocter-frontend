import React from "react";
import Navbar from "./Navbar";
import { FaSearchengin } from "react-icons/fa";
import Slider from "./Slider";
const Home = () => {
  return (
    <section>
      <article>
        <div className="flex justify-between">
          <div className="fixed z-10">
            <Navbar />
          </div>
          <div >
            <div className="flex h-[100px] items-center justify-center ">
              <input
                type="text"
                className="w-[449px] h-[49px] border-2 border-slate-900 rounded-xl px-5"
                placeholder="Search Doctor and Hospitals"
              />
              <FaSearchengin className="text-[35px] absolute right-[460px] " />
            </div>
            <div className=" h-[300px] bg-slate-900 mt-[50px] ">
              <div className="flex justify-between w-[90%] m-[10px]">
                <div>
                  <img
                    src="./doctor.png"
                    className="h-[400px] relative top-[-100px]"
                    alt=""
                  />
                </div>
                <div className="w-[50%]  ">
                  <h1 className="text-white text-4xl mt-10">
                    CONSULT OUR EXPERTS FROM COMFORT AND SAFETY OF THEIR HOME
                  </h1>
                  <button className="bg-slate-500 w-[110px] h-[50px] rounded-[20px] mt-10 ml-28 text-white">
                    <a href=""> Know more</a>
                  </button>
                </div>
              </div>
            </div>
            <Slider />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
