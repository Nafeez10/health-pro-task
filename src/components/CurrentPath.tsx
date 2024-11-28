import { Link, useLocation } from "react-router";
import { rightArrowSvg } from "../assets";

const CurrentPath = () =>{

    const location = useLocation();

    const pathName = location.pathname;

    const resultLinks = (
        <div className="text-[.7rem] flex gap-3 max-md:hidden">
            <Link to={'/'}>
                Home
            </Link>
            <p>/</p>
            <Link to={'/'}>
                IVF Success Rate Calculator
            </Link>
            <p>/</p>
            <Link to={'/result'}>
                Result
            </Link>
        </div>
    )

    const homeLinks = (
        <div className="text-[.7rem] flex gap-3 max-md:hidden">
            <Link to={'/'}>
                Home
            </Link>
            <p>/</p>
            <Link to={'/'}>
                IVF Success Rate Calculator
            </Link>
        </div>
    )

    const pathLinks = pathName == '/result' ? resultLinks : homeLinks

    return(
        <>
            <div>
                <div className=" ">
                    {pathLinks}
                </div>
                <div className=" flex items-center gap-3 md:hidden">
                    <Link to={'/'}>
                        <img className={` ${pathName == "/result" ? "" : "brightness-0"}  rotate-180 w-6`} src={rightArrowSvg} alt="" />
                    </Link>
                    <p>IVF Success Rate Calculator</p>
                </div>
            </div>
        </>
    )
}

export default CurrentPath;