import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Aside,FollowCard } from "../../components";
import { SinglePost } from "../Home/SinglePost";

export const BookMark=()=>{
    const {user}= useSelector((state)=>state.auth);
    const {allPosts} = useSelector((state)=>state.post);
    const [bookMark, setBookMark]= useState([]);

    useEffect(()=>{
       setBookMark(
           allPosts.filter((post)=>
            post?.bookmark?.some((bookMarkPost)=>bookMarkPost.username === user.username))
       )
    },[allPosts])
    return(
       <div className="flex flex-row justify-center w-10/12 gap-6 m-auto ">
            <Aside/>
            <div className="flex flex-col w-5/12 gap-7 py-6">
             <section className="relative">
                <span className="top-2 left-2.5 absolute"><i className="fas fa-search text-blue-400"></i></span>
                <input type="text" placeholder="Search" 
                className="w-full h-10 bg-white border-none rounded-lg search-shadow pl-12 outline-none text-gray-400"/>
             </section>

             {bookMark.length>0 ? bookMark.map((post)=>{
                 return(
                     <SinglePost
                     key={post._id}
                     post={post}
                     />
                 )
             }):
             <div className="w-full justify-center items-center text-xl text-gray-500 font-bold">
             <p className="text-center">No Bookmarks Yet</p>
             </div>
            }
            </div>
            <FollowCard/>
       </div>
    )
}