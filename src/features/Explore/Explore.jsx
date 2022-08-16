import { Aside,FollowCard } from "../../components"
import { useSelector } from "react-redux"
import { SinglePost } from "../Home/SinglePost";

export const Explore=()=>{
    const {allPosts} = useSelector((state)=>state.post);
    const sortedPosts= [...allPosts].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    return(
        <div className="flex flex-row justify-center w-10/12 gap-6 m-auto ">
            <Aside/>
            <div className="flex flex-col w-5/12 gap-7 py-6">
             <section className="relative">
                <span className="top-2 left-2.5 absolute"><i className="fas fa-search text-blue-400"></i></span>
                <input type="text" placeholder="Search" 
                className="w-full h-10 bg-white border-none rounded-lg search-shadow pl-12 outline-none text-gray-400"/>
             </section>

             {allPosts.length>0 && sortedPosts.map((post)=>{
                 return(
                     <SinglePost
                     key={post._id}
                     post={post}
                     />
                 )
             })}
            </div>

            <FollowCard/>
        </div>
    )
}