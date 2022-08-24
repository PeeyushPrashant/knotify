import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Aside,FollowCard,Search } from "../../components";
import { SinglePost } from "../Home/SinglePost";
import { Modal } from "../Home/Modal/Modal";

export const BookMark=()=>{
    const {user}= useSelector((state)=>state.auth);
    const {allPosts} = useSelector((state)=>state.post);
    const {postModal}= useSelector((state)=>state.postModal); 
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
            <div className="flex flex-col w-5/12 gap-7 mb-6">
             <Search/>

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
            {postModal && <Modal/>}
            <FollowCard/>
       </div>
    )
}