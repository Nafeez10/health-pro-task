import { logoSvg, menuSvg, navLinks, rightArrowSvg } from "../assets";

type propsType = {
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setShowSidebar }: propsType) =>{

    const handeleSidebar = () =>{
         setShowSidebar(true);
    }

    return(
        <>
            <nav className=" my-container">
                <div className=" mt-5 flex items-center max-xl:justify-between xl:gap-24">
                    <div className=" w-36">
                        <img className=" w-full" src={logoSvg} alt="" />
                    </div>
                    <ul className=" max-xl:hidden text-[.75rem] flex grow justify-between items-center">
                        {
                            navLinks.map( link => (
                                <li key={link}>
                                    <a href="">
                                        {link}
                                    </a>
                                </li>
                            ))
                        }
                        <li>
                            <a href="">
                                <button className=" flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md">
                                    <span>Talk To Us</span>
                                    <img className=" w-4" src={rightArrowSvg} alt="" />
                                </button>
                            </a>
                        </li>
                    </ul>
                    <div className=" xl:hidden">
                        <button onClick={handeleSidebar} className=" w-8 active:scale-90 transition ">
                            <img className=" w-full" src={menuSvg} alt="" />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;