import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Aside,FollowCard,Search } from "../../components"
import { getUserPost } from "../Home/postSlice"
import { SinglePost } from "../Home/SinglePost"
import { ProfileModal } from "./ProfileModal/ProfileModal"
import { Modal } from "../Home/Modal/Modal"


export const Profile=()=>{
    const dispatch= useDispatch();
    const {user} = useSelector((state)=>state.auth);
    const {allPosts,userPosts}= useSelector((state)=>state.post);
    const {postModal}= useSelector((state)=>state.postModal); 
    const [profileModal,setProfileModal] = useState(false);

    useEffect(()=>{
       dispatch(getUserPost(user?.username))
    },[allPosts])
    return(
        <div className="flex flex-row justify-center w-10/12 gap-6 m-auto">
          <Aside/>
          <div className="flex flex-col w-5/12 gap-7 mb-6">
             <Search/>
             <div className="w-full flex flex-row gap-4 rounded-lg p-4 bg-white">
                    <img src={user?.profilePic}
                    alt="" className="h-20 w-20 object-cover rounded-full"/>
                    <section className="w-full flex flex-col gap-4">
                        <header className="w-full flex flex-row justify-between">
                            <div className="flex flex-col gap-0.5">
                                <h3 className="font-bold">{user?.name}</h3>
                                 <p className="text-gray-400 text-sm">@{user?.userHandler}</p>
                            </div>
                            <button className="px-2.5 h-7 rounded-lg flex flex-row justify-center items-center border border-slate-600"
                            onClick={()=>setProfileModal(true)}
                            >Edit</button>
                        </header>
                        <p className="text-base text-gray-600">{user?.bio}</p>
                        <div className="w-full flex flex-row gap-6 text-base text-gray-600">
                            <p>{userPosts?.length} posts</p>
                            <p>{user?.followers.length} Followers</p>
                            <p>{user?.following.length} Following</p>
                        </div>
                        <div className="text-sm font-semibold flex gap-4">
                        <div>
                            <a href= {user?.link}
                             className="text-blue-400 hover:underline decoration-1 break-all"
                             target="_blank"
                            >{user?.link}</a>
                        </div>
                        </div>
                    </section>
             </div>
             {userPosts?.length>0 && userPosts.map((post)=>{
                 return (
                     <SinglePost
                     key={post._id}
                     post={post}
                     />
                 )
             })}
            </div>
            {profileModal && 
            <ProfileModal
            setProfileModal={setProfileModal}
            />}
            {postModal && <Modal/>}
            <FollowCard/>
        </div>
    )
}