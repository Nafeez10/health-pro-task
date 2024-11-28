import { useContext, useEffect } from "react";
import CurrentPath from "./CurrentPath";
import { AppContext } from "../context/AppProvider";
import ShowResult from "./ShowResult";
import NoResult from "./NoResult";

const IVFSuccessRate = () =>{

    const { ivfResult } = useContext(AppContext);

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])

    return(
        <>
            <div className=" relative bg-[#303030] min-h-[90vh] w-full">
                <section className=" text-white my-container pt-7">
                    <CurrentPath />
                </section>
                <div className=" mt-10 flex items-center text-white gap-5">
                    <div className=" flex items-center">
                        <div className=" h-[1px] w-20 max-sm:w-10 bg-orange-400"></div>
                        <div className=" w-5 h-5 rounded-full bg-orange-400"></div>
                    </div>
                    <div>
                        <h2 className=" text-2xl max-sm:text-xl">Your estimated IVF Success Rate is</h2>
                    </div>
                </div>
                <div>
                    {
                       !Number.isNaN(ivfResult) ? <ShowResult /> : <NoResult />
                    }
                </div>
            </div>  
        </>
    )
}

export default IVFSuccessRate;