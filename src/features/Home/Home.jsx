import { useEffect, useState } from "react"
import { Aside } from "../../components"
import { FollowCard } from "../../components"
import { Modal } from "./Modal/Modal"
import { SinglePost } from "./SinglePost"
import { useDispatch,useSelector } from "react-redux"
import { addUserPost,getAllPosts } from "./postSlice"
import { getAllUsers } from "../Profile/userSlice"

export const Home=()=>{
    const [modal,setModal]= useState(false);
    const {user} = useSelector((state)=>state.auth);
    const {allPosts} = useSelector((state)=>state.post);
    const {allUsers}= useSelector((state)=>state.user);
    const [postData,setPostData]= useState("");
    const [feedPost,setFeedPost]= useState([]);
    const dispatch =useDispatch();
    const postHandler=()=>{
         dispatch(addUserPost({content:postData}));
         setModal(false);
         setPostData("");
    }
    useEffect(()=>{
       if(allPosts){
           setFeedPost(allPosts?.filter((post)=>
           post?.username===user?.username ||
           user?.following?.find((ele)=>ele?.username===post?.username)
           )
           .sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt))
           )
       }
    },[user,allPosts]);


    return(
        <div className="flex flex-row justify-center w-10/12 gap-6 m-auto ">
            <Aside/>
            <div className="flex flex-col w-5/12 gap-7 py-6">
              <section className="relative">
              <span className="top-2 left-2.5 absolute"><i className="fas fa-search text-blue-400"></i></span>
              <input type="text" placeholder="Search" 
              className="w-full h-10 bg-white border-none rounded-lg search-shadow pl-12 outline-none text-gray-400"/>
              </section>
              
              <div className="w-full h-10 bg-white border-none rounded-lg text-gray-400 pt-2 pl-12 relative shadow"
              onClick={()=>setModal(true)}
              >
                <span className="top-1.5 left-2.5 absolute"><i className="fas fa-user-circle text-blue-400 text-lg"></i></span>
                What's on your mind, Prashant?
                <span className="top-1.5 right-2.5 absolute"><i className="fas fa-plus-circle text-blue-400 text-lg"></i></span>
            </div> 
            <div className="w-full h-10 bg-white border-none rounded-lg text-gray-500 p-2 shadow flex flex-row justify-center items-center">
               <div className="w-1/2 flex flex-row justify-center items-center gap-3 border-r-2 border-blue-400 cursor-pointer">
                   <span><i className="fas fa-fire-alt text-xl"></i></span>
                   <p>Trending</p>
               </div>
               <div className="w-1/2 flex flex-row justify-center items-center gap-3 cursor-pointer">
                   <span><i className="fas fa-sort text-xl"></i></span>
                   <p>Latest Posts</p>
               </div>
            </div>
            {feedPost.map((post)=>{
                return(
                    <SinglePost
                    key={post._id}
                     post={post}
                    />
                )
            })}
            
            </div>
            {modal && <Modal
            setModal={setModal}
            postData={postData}
            setPostData={setPostData}
            postHandler={postHandler}
            />}
            <FollowCard/>
        </div>
    )
}