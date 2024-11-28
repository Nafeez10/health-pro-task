import { Link } from "react-router";

const NoResult = () =>{

    return(
        <>
            <div className=" text-center text-white mt-20">
                <p className="text-4xl">
                    Fill the form to calculate the Result
                </p>
                <div className=" mt-10">
                    <Link to={'/'}>
                        <button className=" active:scale-95 transition bg-orange-600 px-4 py-2 rounded-md">
                            Go to Form page
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NoResult;