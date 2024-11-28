import { navLinks } from "../assets";

type propsType = {
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = ({ setShowSidebar }: propsType) =>{

    const date = new Date();
    const currentYear = date.getFullYear();

    const sidebarModalHandeler = (e:any) =>{
        if(e.target! == e.currentTarget){
            setShowSidebar(false);
        }
    }

    const linkClickHandeler = () =>{
        setShowSidebar(false);
    }

    return(
        <>
            <section onClick={sidebarModalHandeler} className=" z-20 text-white fixed top-0 left-0 bg-[#0008] w-full h-screen animate-[pop-in_.3s]">
                <div className=" animate-[slide-in_.3s] w-64 bg-orange-800 rounded-e-3xl h-full pt-5 flex flex-col justify-between">
                    <div className="pl-5">
                        <h2 className=" text-2xl font-semibold">Navigation:</h2>
                        <div className=" flex flex-col mt-7 gap-5 ">
                            {
                                navLinks.map( link =>(
                                    <a key={link} onClick={linkClickHandeler} className=" cursor-pointer">
                                        {link}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className=" pb-3">
                        <p className=" text-sm opacity-80 text-center">IVF &copy; {currentYear} </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sidebar;