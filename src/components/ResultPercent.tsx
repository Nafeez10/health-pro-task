type propsType = {
    percentage:number;
    ivfCycles: number
}

const ResultPercent = ({ percentage, ivfCycles }:propsType) =>{

    return(
        <>
            <div className=" flex flex-col items-center gap-5">
                <div
                    style={{
                        backgroundImage: `conic-gradient( #5BD489 ${percentage}%, green ${percentage}%)`
                    }} 
                    className=" max-sm:w-52 max-sm:h-52 w-72 h-72 flex justify-center items-center rounded-full"
                >
                    <div className=" text-white flex items-center justify-center max-sm:w-36 max-sm:h-36 w-48 h-48 rounded-full bg-[#032706]">
                        <h3 className=" text-5xl max-sm:text-4xl">
                            {percentage}%
                        </h3>
                    </div>
                </div>
                <div className="">
                    <p className=" text-white">
                        With {ivfCycles} IVF Cycle
                    </p>
                </div>
            </div>
        </>
    )
}

export default ResultPercent;