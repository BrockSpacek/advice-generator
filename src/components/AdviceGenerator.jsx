import { getAdvice } from "../services/services";
import React, { useState } from 'react'
import desktopDivide from '/src/assets/pattern-divider-desktop.svg';
import mobileDivide from '/src/assets/pattern-divider-mobile.svg';
import diceBtn from '/src/assets/icon-dice.svg';

const AdviceGenerator = () => {

    const [data, setData] = useState();
    const [id, setId] = useState(1);
    const [quote, setQuote] = useState("This is where the advice will be placed but imagine the people who are talking should just shut up");



    return (

        <div className="bg-[#1f2632] h-screen bg-cover bg-no-repeat bg-center place-content-center">
            <div className="place-items-center">
            <div className="bg-[#4e5d73] h-[350px] lg:w-[40%] md:w-[60%] w-[95%] rounded-3xl">
                <div className="text-center">
                    <h1 className="text-[#52ffa8] font-bold text-[22px] pt-10">Advice #{id}</h1>
                    <p className="text-[#cee3e9] font-bold text-[28px] mt-5 px-8">{quote}</p>
                    <img src={desktopDivide} alt="desktop divider" />
                        <img className="md:hidden" src={mobileDivide} alt="mobile divider" />

                        <button>
                            <img src={diceBtn} alt="dice icon" />
                        </button>
                    <button></button>
                </div>
            </div>
            </div>

        </div>
    )

}

export default AdviceGenerator