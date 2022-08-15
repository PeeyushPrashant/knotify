import { NavLink } from "react-router-dom"

export const Aside=()=>{
    return(
        <>
        <aside className="w-64 sticky top-0 left-0 flex flex-col h-screen gap-4 py-4 text-gray-500">
        <h1 className="text-blue-500 mb-2.5 text-4xl h1-heading pl-4">Knotify</h1>
            {/* <NavLink> */}
                <div className="flex flex-row gap-4 pl-4 w-full h-10 items-center list-option">
                <i className="fas fa-home text-xl"></i>
                    <p className="font-semibold">Home</p>
                </div>
            {/* </NavLink> */}
            {/* <NavLink> */}
                <div className="flex flex-row gap-4 pl-4 w-full h-10 items-center list-option">
                <i className="fas fa-compass text-xl"></i>
                    <p className="font-semibold">Explore</p>
                </div>
            {/* </NavLink> */}
            {/* <NavLink> */}
                <div className="flex flex-row gap-4 pl-4 w-full h-10 items-center list-option">
                <i className="fas fa-bookmark text-xl"></i>
                    <p className="font-semibold">Bookmark</p>
                </div>
            {/* </NavLink> */}
            {/* <NavLink> */}
                <div className="flex flex-row gap-4 pl-4 w-full h-10 items-center list-option">
                <i className="fas fa-user-circle text-xl"></i>
                    <p className="font-semibold">Profile</p>
                </div>
            {/* </NavLink> */}
            {/* <NavLink> */}
                <div className="flex flex-row gap-4 pl-4 w-full h-10 items-center list-option">
                <i className="fas fa-sign-out-alt text-xl"></i>
                    <p className="font-semibold">Logout</p>
                </div>
            {/* </NavLink> */}
        </aside>
        </>
    )
}