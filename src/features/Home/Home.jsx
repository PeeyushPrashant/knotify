import { Aside } from "../../components"
import { FollowCard } from "../../components"

export const Home=()=>{
    return(
        <div className="flex flex-row justify-center w-9/12 gap-6 m-auto ">
            <Aside/>
            <div className="flex flex-col w-5/12 gap-7 py-6">
              <section className="relative">
              <span className="top-2 left-2.5 absolute"><i className="fas fa-search text-blue-500"></i></span>
              <input type="text" placeholder="Search" 
              className="w-full h-10 bg-white border-none rounded-lg search-shadow pl-12 outline-none text-gray-400"/>
              </section>
              
              <div className="w-full h-10 bg-white border-none rounded-lg text-gray-400 pt-2 pl-12 relative shadow">
                  <span className="top-1.5 left-2.5 absolute"><i className="fas fa-user-circle text-blue-500 text-lg"></i></span>
                  What's on your mind, Prashant?
                  <span className="top-1.5 right-2.5 absolute"><i className="fas fa-plus-circle text-blue-500 text-lg"></i></span>
                </div> 
              
              
            </div>
            <FollowCard/>
        </div>
    )
}