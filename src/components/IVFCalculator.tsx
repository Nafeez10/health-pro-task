import { ChangeEvent, useContext, useEffect, useState } from "react";
import CurrentPath from "./CurrentPath";
import { AppContext } from "../context/AppProvider";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

type ageRangeType = "option-1" | "option-2" | "option-3" | "option-4" | "option-5" |"option-6" 

type twoOptions = "option-1" | "option-2"

const IVFCalculator = () =>{

    const { setIvfResult, setIvfCycles } = useContext(AppContext);

    const navigate = useNavigate();

    const [ ageRange, setAgeRange ] = useState<ageRangeType | "">("");
    const [ noIVFCycles, setNoIVFCycles ] = useState("0");
    const [ isICSIProcedure, setISICSIProcedure ] = useState<twoOptions | "">("");
    const [ isPGTTesting, setIssPGTTesting ] = useState<twoOptions | "">("");
    const [ isPCOS, setIsPCOS ] = useState(false);
    const [ isEndometriosis, setIsEndometriosis ] = useState(false);
    const [ isLowOvarianReserve, setIsLowOvarianReserve ] = useState(false);
    const [ isMaleFactorInfertility, setIsMaleFactorInfertility ] = useState(false);

    const [ showSliderNum, setShowSlideNum ] = useState(false);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    useEffect(()=>{
        
        let timer = setTimeout(()=>{
            setShowSlideNum(false);
        },1000)

        return ()=>{
            clearTimeout(timer);
        }

    },[noIVFCycles])

    const ageChangeHandeler = (e:ChangeEvent<HTMLInputElement>) => setAgeRange(e.target.value as ageRangeType);
    const IVFRangeHandeler = (e:ChangeEvent<HTMLInputElement>) => { setNoIVFCycles(e.target.value); setShowSlideNum(true) };
    const ICSIProcedureHandeler = (e:ChangeEvent<HTMLInputElement>) => setISICSIProcedure(e.target.value as twoOptions);
    const PGTTestingHandeler = (e:ChangeEvent<HTMLInputElement>) => setIssPGTTesting(e.target.value as twoOptions);
    const isPCOSHandeler = (e:ChangeEvent<HTMLInputElement>) => setIsPCOS(e.target.checked);
    const isEndometriosisHandeler = (e:ChangeEvent<HTMLInputElement>) => setIsEndometriosis(e.target.checked);
    const isLowOvarianReserveHandeler = (e:ChangeEvent<HTMLInputElement>) => setIsLowOvarianReserve(e.target.checked);
    const isMaleFactorInfertilityHandeler = (e:ChangeEvent<HTMLInputElement>) => setIsMaleFactorInfertility(e.target.checked);

    const ivfCyclesTaken = parseInt(noIVFCycles) / 25;

    const calculateIvfHandeler = (e:any) =>{
        e.preventDefault();

        if( 
            !ageRange || !isICSIProcedure || !isPGTTesting
        ){
                
            toast(
                `You haven't filled the following: ${!ageRange ? "your age range," : ""} ${!isICSIProcedure ? "ICSI Procedure," : ""} ${!isPGTTesting ? "PGT Testing." : ""} `,
                {
                  duration: 3000,
                }
            );
            return;
        }

    
        let successRate = 40;

        const patientAgeRange = (
            ageRange == "option-1" ? 30 : 
                ageRange == "option-2" ? 34:
                    ageRange == "option-3" ? 37:
                        ageRange == "option-4" ? 39:
                            41
        )

        const ivfCyclesTaken = parseInt(noIVFCycles) / 25;

    
        if (patientAgeRange < 30 ) {
            successRate += 10;
        } else if (patientAgeRange >= 30 && patientAgeRange < 38) {
            successRate += 5;
        } else if (patientAgeRange >= 38 && patientAgeRange < 40) {
            successRate -= 5;
        } else if (patientAgeRange >= 40) {
            successRate -= 10;
        }
        
        successRate -= ivfCyclesTaken * 2;
        
        if (isICSIProcedure == "option-1") {
            successRate += 5;
        }
        
        if (isPGTTesting == "option-1") {
            successRate += 5;
        }
        
        if (isPCOS) {
            successRate -= 5;
        }
        if (isEndometriosis) {
            successRate -= 5;
        }
        if (isLowOvarianReserve) {
            successRate -= 10;
        }
        if (isMaleFactorInfertility) {
            successRate -= 5;
        }
        
        if (successRate > 100) {
            successRate = 100;
        } else if (successRate < 0) {
            successRate = 0;
        }
        
        setIvfResult(successRate);
        setIvfCycles(ivfCyclesTaken);
        navigate('/result')

    }



    return(
        <>
            <div className=" my-container pb-5">
                <section className=" mt-7">
                    <CurrentPath />
                </section>
                <form className="mt-5" action="">
                    <div className="">
                        <label className=" max-md:text-left text-center block text-lg" htmlFor="">
                            Which age range applies to you?
                        </label>
                        <div className=" grid grid-cols-[1fr_1fr_1fr] max-md:grid-cols-[1fr] w-[55%] max-sm:w-full max-md:w-[80%] max-xl:w-[60%]  md:mx-auto mt-7 gap-4 ">
                            <label className=" flex items-center gap-5 cursor-pointer">
                                <input onChange={ageChangeHandeler} value={"option-1"} checked={ageRange == "option-1"} type="radio" name="age-change" className="radio accent-orange-400 checked:bg-orange-400"  />
                                <span className="label-text">Under 30</span>
                            </label>
                            <label className=" flex items-center gap-5 cursor-pointer">
                                <input onChange={ageChangeHandeler} value={"option-2"} checked={ageRange == "option-2"} type="radio" name="age-change" className="radio accent-orange-400 checked:bg-orange-400"  />
                                <span className="label-text">Between 30 - 34</span>
                            </label>
                            <label className=" flex items-center gap-5 cursor-pointer">
                                <input onChange={ageChangeHandeler} value={"option-3"} checked={ageRange == "option-3"} type="radio" name="age-change" className="radio accent-orange-400 checked:bg-orange-400"  />
                                <span className="label-text">Between 35 - 37</span>
                            </label>
                            <label className=" flex items-center gap-5 cursor-pointer">
                                <input onChange={ageChangeHandeler} value={"option-4"} checked={ageRange == "option-4"} type="radio" name="age-change" className="radio accent-orange-400 checked:bg-orange-400"  />
                                <span className="label-text">Between 38 - 40</span>
                            </label>
                            <label className=" flex items-center gap-5 cursor-pointer">
                                <input onChange={ageChangeHandeler} value={"option-5"} checked={ageRange == "option-5"} type="radio" name="age-change" className="radio accent-orange-400 checked:bg-orange-400"  />
                                <span className="label-text">Betweeen 41 - 43</span>
                            </label>
                            <label className=" flex items-center gap-5 cursor-pointer">
                                <input onChange={ageChangeHandeler} value={"option-6"} checked={ageRange == "option-6"} type="radio" name="age-change" className="radio accent-orange-400 checked:bg-orange-400"  />
                                <span className="label-text">Above 43</span>
                            </label>
                        
                        </div>
                    </div>
                    <div className=" mt-10">
                        <label className=" max-md:text-left text-center block text-lg" htmlFor="">
                            Number of IVF Cycles?
                        </label>
                        
                        <div className=" max-sm:w-full w-80 relative mx-auto mt-7">
                            <input onChange={IVFRangeHandeler} type="range" min={0} max="100" value={noIVFCycles} className="range [--range-shdw:orange]" step="25" />
                            <div className=" absolute top-[50%] translate-y-[-100%] left-0 -z-10  flex w-full justify-between px-2 text-xs">
                                <span className=" w-[.5rem] h-[.5rem] bg-slate-300 rounded-full"></span>
                                <span className=" w-[.5rem] h-[.5rem] bg-slate-300 rounded-full"></span>
                                <span className=" w-[.5rem] h-[.5rem] bg-slate-300 rounded-full"></span>
                                <span className=" w-[.5rem] h-[.5rem] bg-slate-300 rounded-full"></span>
                                <span className=" w-[.5rem] h-[.5rem] bg-slate-300 rounded-full"></span>
                            </div>
                            <div className={`${showSliderNum ? "opacity-100" : "opacity-0"} transition tooltip-container`}>
                                <div className={` opacity-0`}>
                                    <span className=" px-2 py-2 bg-orange-400 text-white rounded-md">0</span> 
                                </div>
                                <div className={`${ivfCyclesTaken == 1 ? "" : "opacity-0"}`}>
                                    <span className=" px-2 py-2 bg-orange-400 text-white rounded-md">1</span> 
                                </div>
                                <div className={`${ivfCyclesTaken == 2 ? "" : "opacity-0"}`}>
                                    <span className=" px-2 py-2 bg-orange-400 text-white rounded-md">2</span> 
                                </div>
                                <div className={`${ivfCyclesTaken == 3 ? "" : "opacity-0"}`}>
                                    <span className=" px-2 py-2 bg-orange-400 text-white rounded-md">3</span> 
                                </div>
                                <div className={`${ivfCyclesTaken == 4 ? "" : "opacity-0"}`}>
                                    <span className=" px-2 py-2 bg-orange-400 text-white rounded-md">4</span> 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className=" mt-10">
                        <label className=" max-md:text-left text-center block text-lg" htmlFor="">
                            Have you undergone these procedures before?
                        </label>
                        <div className=" flex max-md:flex-col max-md:gap-0 justify-center gap-10">
                            <div className=" grid grid-cols-[2fr_1fr_1fr] gap-7 mt-7">
                                <label htmlFor="">
                                    ICSI Procedure:
                                </label>
                                <label className=" flex items-center gap-2.5" htmlFor="">
                                    <span>Yes</span>
                                    <input onChange={ICSIProcedureHandeler} value={"option-1"} checked={isICSIProcedure == "option-1"} type="radio" name="icsi" className="radio accent-orange-400 checked:bg-orange-400" />
                                </label>
                                <label className=" flex items-center gap-2.5" htmlFor="">
                                    <span>No</span>
                                    <input onChange={ICSIProcedureHandeler} value={"option-2"} checked={isICSIProcedure == "option-2"} type="radio" name="icsi" className="radio accent-orange-400 checked:bg-orange-400" />
                                </label>
                            </div>
                            <div className=" grid grid-cols-[2fr_1fr_1fr] gap-7 mt-7">
                                <label htmlFor="">
                                    PGT Testing:
                                </label>
                                <label className=" flex items-center gap-2.5" htmlFor="">
                                    <span>Yes</span>
                                    <input onChange={PGTTestingHandeler} value={"option-1"} checked={isPGTTesting == "option-1"} type="radio" name="pgt" className="radio accent-orange-400 checked:bg-orange-400" />
                                </label>
                                <label className=" flex items-center gap-2.5" htmlFor="">
                                    <span>No</span>
                                    <input onChange={PGTTestingHandeler} value={"option-2"} checked={isPGTTesting == "option-2"} type="radio" name="pgt" className="radio accent-orange-400 checked:bg-orange-400" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-10">
                        <label className=" max-md:text-left text-center block text-lg" htmlFor="">
                            Do you have any of these medical conditions?
                        </label>
                        <div className=" flex max-md:flex-col max-md:gap-7 md:justify-center gap-20 mt-7">
                            <div className=" flex gap-2.5">
                                <input
                                    type="checkbox"
                                    checked={isPCOS}
                                    onChange={isPCOSHandeler}
                                    className="checkbox [--rounded-btn:3px] border-orange-400 [--chkbg:orange] [--chkfg:white] checked:border-orange-500"
                                />
                                <span>PCOS</span>
                            </div>
                            <div className=" flex gap-2.5">
                                <input
                                    type="checkbox"
                                    checked={isEndometriosis}
                                    onChange={isEndometriosisHandeler}
                                    className="checkbox [--rounded-btn:3px] border-orange-400 [--chkbg:orange] [--chkfg:white] checked:border-orange-500"
                                />
                                <span>Endometriosis</span>
                            </div>
                            <div className=" flex gap-2.5">
                                <input
                                    type="checkbox"
                                    checked={isLowOvarianReserve}
                                    onChange={isLowOvarianReserveHandeler}
                                    className="checkbox [--rounded-btn:3px] border-orange-400 [--chkbg:orange] [--chkfg:white] checked:border-orange-500"
                                />
                                <span>Low Ovarian Reserve</span>
                            </div>
                            <div className=" flex gap-2.5">
                                <input
                                    type="checkbox"
                                    checked={isMaleFactorInfertility}
                                    onChange={isMaleFactorInfertilityHandeler}
                                    className="checkbox [--rounded-btn:3px] border-orange-400 [--chkbg:orange] [--chkfg:white] checked:border-orange-500"
                                />
                                <span>Male Factor Infertility</span>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center mt-10">
                        <button onClick={calculateIvfHandeler} className=" active:scale-90 transition bg-red-400 text-white px-4 py-2 rounded-md">
                            Calculate
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default IVFCalculator;