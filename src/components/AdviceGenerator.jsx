import { getAdvice } from "../services/services";
import React, { useState } from "react";
import desktopDivide from "/src/assets/pattern-divider-desktop.svg";
import mobileDivide from "/src/assets/pattern-divider-mobile.svg";
import diceBtn from "/src/assets/icon-dice.svg";

const AdviceGenerator = () => {
  const [data, setData] = useState();
  const [id, setId] = useState(9);
  const [quote, setQuote] = useState(
    "True happiness always resides in the quest but what happens when i have to add a bunch of text that makes this thing longer"
  );

  return (
    <div className="bg-[#1f2632] h-screen bg-cover bg-no-repeat bg-center place-content-center">
      <div className="place-items-center">
        <div className="bg-[#323a49] h-[350px] lg:w-[40%] md:w-[60%] w-[95%] rounded-3xl">
          <div className="text-center">
            <h1 className="text-[#52ffa8] font-bold text-[22px] pt-10 tracking-[0.3em]">
              Advice #{id}
            </h1>
            <p className="text-[#cee3e9] font-bold text-[28px] mt-5 px-8">
              {quote}
            </p>
          </div>
          <div className="place-items-center pt-6">
            <img src={desktopDivide} alt="desktop divider" />
            <img
              className="md:hidden"
              src={mobileDivide}
              alt="mobile divider"
            />
          </div>
        </div>

        <div className="place-items-center">
          <button className="absolute -mt-[2%] w-[65px] h-[65px] place-items-center rounded-full bg-[#52ffa8]">
            <img className="" src={diceBtn} alt="dice icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdviceGenerator;
