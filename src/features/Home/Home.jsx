import { useEffect, useState } from "react"
import { Aside,FollowCard,Search } from "../../components"
import { Modal } from "./Modal/Modal"
import { SinglePost } from "./SinglePost"
import { useDispatch,useSelector } from "react-redux"
import { openPostModal } from "./Modal/postModalSlice"


export const Home=()=>{

    const {user} = useSelector((state)=>state.auth);
    const {allPosts} = useSelector((state)=>state.post);
    const {postModal}= useSelector((state)=>state.postModal);
    const [feedPost,setFeedPost]= useState([]);
    const [trendPost,setTrendPost]= useState({isTrend:false,posts:[]})
    const dispatch =useDispatch();
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

    const trendHandler=()=>{
        setTrendPost((prev)=>({...prev,isTrend:true}));
        setTrendPost((prev)=>({...prev,
         posts: allPosts?.filter((post)=>post.likes.likeCount>0)
         .sort((a,b)=>b.likes.likeCount-a.likes.likeCount)
        }))

    }

    const latestHandler=()=>{
        setTrendPost((prev)=>({...prev,isTrend:false}));
    }

    return(
        <div className="flex flex-row justify-center w-10/12 gap-6 mr-auto  ml-auto">
            <Aside/>
            <div className="flex flex-col w-5/12 gap-7 mb-6">
             <Search/>
              
              <div className="w-full h-10 bg-white border-none rounded-lg text-gray-400 pt-2 pl-12 relative shadow"
              onClick={()=>dispatch(openPostModal())}
              >
                <span className="top-1.5 left-2.5 absolute"><i className="fas fa-user-circle text-blue-400 text-lg"></i></span>
                What's on your mind, Prashant?
                <span className="top-1.5 right-2.5 absolute"><i className="fas fa-plus-circle text-blue-400 text-lg"></i></span>
            </div> 
            <div className="w-full h-10 bg-white border-none rounded-lg text-gray-500 p-2 shadow flex flex-row justify-center items-center">
               <div className="w-1/2 flex flex-row justify-center items-center gap-3 border-r-2 border-blue-400 cursor-pointer"
               onClick={trendHandler}
               >
                   <span><i className="fas fa-fire-alt text-xl"></i></span>
                   <p>Trending</p>
               </div>
               <div className="w-1/2 flex flex-row justify-center items-center gap-3 cursor-pointer"
               onClick={latestHandler}
               >
                   <span><i className="fas fa-sort text-xl"></i></span>
                   <p>Latest Posts</p>
               </div>
            </div>
            {trendPost.isTrend? 
            trendPost.posts.length>0? 
             trendPost.posts.map((post)=>{
                 return(
                     <SinglePost
                     key={post._id}
                     post={post}
                     />
                 )
             }):
             <div className="w-full justify-center items-center text-xl text-gray-500 mt-4 font-bold">
             <p className="text-center">Like more posts to see what's trending</p>
             </div>
             :
             
             feedPost.map((post)=>{
                return(
                    <SinglePost
                    key={post._id}
                     post={post}
                    />
                )
            })
            
            }
             {!trendPost.isTrend && <div className="w-full justify-center items-center text-xl text-gray-500 font-bold">
             <p className="text-center">Follow some users to see feed</p>
             </div>}
            </div>
            {postModal && <Modal/>}
            <FollowCard/>
        </div>
       
    )
}