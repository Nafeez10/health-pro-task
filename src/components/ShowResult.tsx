import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import { resultsBanner, rightArrowSvg } from "../assets";
import ResultPercent from "./ResultPercent";

const ShowResult = () =>{

    const { ivfResult, ivfCycles } = useContext(AppContext);

    return(
        <>
            <div className="flex max-lg:justify-center justify-end">
                <div className=" w-[80%] max-sm:w-full flex max-lg:flex-col ">
                    <div className=" mt-20">
                        <ResultPercent ivfCycles={ivfCycles} percentage={ivfResult} />
                    </div>
                    <div className=" w-full flex justify-center overflo w-hidden relative grow bor der-2">
                        <img className=" z-10 max-sm:w-[700px] min-w-[700px] " src={resultsBanner} alt="" />
                        <div className=" bg-[#4ade8081] h-44 w-44 absolute border-2 z-[-0] blur-[60px] left-[50%] translate-x-[-50%] top-10"></div>
                    </div>
                    <div className=" z-10 py-4 w-full bord er-2 backdrop-blur-xl flex justify-center absolute bottom-0 left-[50%] translate-x-[-50%]">
                        <button className=" active:scale-95 transition flex items-center gap-3 text-white px-4 py-2 rounded-md bg-orange-400">
                            <span>Start Private Consultation</span>
                            <img src={rightArrowSvg} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowResult;