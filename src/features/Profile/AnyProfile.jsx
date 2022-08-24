import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { Aside,FollowCard,Search } from "../../components"
import { getUserPost } from "../Home/postSlice";
import { SinglePost } from "../Home/SinglePost";
import { followUnFollowUser } from "./userSlice";

export const AnyProfile=()=>{
    const {userId} = useParams();
    const {allUsers} = useSelector((state)=>state.user);
    const {user} = useSelector((state)=>state.auth);
    const {allPosts,userPosts} =useSelector((state)=>state.post);
    const dispatch= useDispatch();
    const [userDetails,setUserDetails] = useState({});

    useEffect(()=>{
       setUserDetails(allUsers?.find((anyUser)=>anyUser.userHandler===userId))
    },[userId,allUsers])

    useEffect(()=>{
      dispatch(getUserPost(userDetails?.username));
    },[userDetails,allPosts])

    const isFollowing = userDetails?.followers?.some((anyUser)=>anyUser.username === user.username);

    return(
     <div className="flex flex-row justify-center w-10/12 gap-6 m-auto">
     <Aside/>
      <div className="flex flex-col w-5/12 gap-7 mb-6">
             <Search/>
             <div className="w-full flex flex-row gap-4 rounded-lg p-4 bg-white">
                    <img src={userDetails?.profilePic}
                    alt="" className="h-20 w-20 object-cover rounded-full"/>
                    <section className="w-full flex flex-col gap-4">
                        <header className="w-full flex flex-row justify-between">
                            <div className="flex flex-col gap-0.5">
                                <h3 className="font-bold">{userDetails?.name}</h3>
                                 <p className="text-gray-400 text-sm">@{userDetails?.userHandler}</p>
                            </div>
                            <button className="bg-blue-400 rounded-2xl px-4 h-8 text-slate-50"
                            onClick={()=>dispatch(followUnFollowUser({
                                userId:userDetails?._id,
                                dispatch:dispatch,
                                isFollow : isFollowing?false:true
                            }))}
                            >{isFollowing?"Unfollow":"Follow"}</button>
                        </header>
                        <p className="text-base text-gray-600">{userDetails?.bio}</p>
                        <div className="w-full flex flex-row gap-6 text-base text-gray-600">
                            <p>{userPosts?.length} posts</p>
                            <p>{userDetails?.followers?.length} Followers</p>
                            <p>{userDetails?.following?.length} Following</p>
                        </div>
                        <div className="text-sm font-semibold flex gap-4">
                        <div>
                            <a href= {userDetails?.link}
                             className="text-blue-400 hover:underline decoration-1 break-all"
                             target="_blank"
                            >{userDetails?.link}</a>
                        </div>
                        </div>
                    </section>
             </div>
             {userPosts?.length>0 ? userPosts.map((post)=>{
                 return(
                     <SinglePost
                     key={post._id}
                     post={post}
                     />
                 )
             }):
             <div className="w-full justify-center items-center text-xl text-gray-500 font-bold">
             <p className="text-center">No Posts Yet</p>
             </div>
             }
      </div>
      <FollowCard/>
     </div>
     
    )
}