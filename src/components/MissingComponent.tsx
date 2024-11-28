import { Link } from "react-router";

const MissingComponent = () =>{

    return(
        <>
            <div className=" text-center mt-20">
                <p className="text-4xl">
                    Page Not Found
                </p>
                <div className=" mt-10">
                    <Link to={'/'}>
                        <button className=" text-white active:scale-95 transition bg-orange-600 px-4 py-2 rounded-md">
                            Go to Home page
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MissingComponent;