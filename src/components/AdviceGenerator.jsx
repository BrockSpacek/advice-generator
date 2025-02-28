import React, { useState, useEffect } from "react";
import desktopDivide from "/src/assets/pattern-divider-desktop.svg";
import mobileDivide from "/src/assets/pattern-divider-mobile.svg";
import diceBtn from "/src/assets/icon-dice.svg";

const AdviceGenerator = () => {
  const [id, setId] = useState();
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewAdvice = async () => {
    try {
      setIsLoading(true);
      let rng = Math.floor( (Math.random() * 223) + 1 );
      const response = await fetch(`https://api.adviceslip.com/advice/${rng}`);
      const data = await response.json();
      
      if (data && data.slip) {
        setId(data.slip.id);
        setAdvice(data.slip.advice);
      }
    } catch (error) {
      console.log("Error fetching advice:", error);
    } finally {
      setIsLoading(false);
    }
  };

  
  useEffect(() => {
    fetchNewAdvice();
  }, []);

  return (
    <div className="bg-[#1f2632] h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div className="w-[95%] md:w-[60%] lg:w-[40%] max-w-[540px] relative">
        <div className="bg-[#323a49] p-6 pb-16 rounded-3xl shadow-lg text-center">
          <h1 className="text-[#52ffa8] font-bold text-[12px] pt-4 tracking-[0.3em]">
            ADVICE #{id}
          </h1>
          <p className="text-[#cee3e9] font-bold text-[20px] lg:text-[28px] mt-5 px-2 md:px-8 mx-auto">
            "{advice}"
          </p>
          <div className="mt-6 mb-2">
            <img 
              className="hidden sm:block w-full" 
              src={desktopDivide} 
              alt="pattern divider" 
            />
            <img
              className="sm:hidden w-full"
              src={mobileDivide}
              alt="pattern divider"
            />
          </div>
        </div>
        <button 
          onClick={fetchNewAdvice}
          disabled={isLoading}
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 w-16 h-16 rounded-full bg-[#52ffa8] flex items-center justify-center transition-all hover:shadow-[0px_0px_2em_0px_rgba(83,255,171)] shadow-[#53ffab] disabled:opacity-70"
        >
          <img 
            className={isLoading ? "animate-spin" : ""} 
            src={diceBtn} 
            alt="dice icon" 
          />
        </button>
      </div>
    </div>
  );
};

export default AdviceGenerator;