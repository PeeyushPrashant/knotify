import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export const FollowCard=()=>{
    const {allUsers} = useSelector((state)=>state.user);
    const {user} = useSelector ((state)=>state.auth);
    const [suggestion,setSuggestion]= useState([]);
    useEffect(()=>{
       setSuggestion(
           allUsers?.filter((ele)=>ele?.username !== user?.username)
           ?.filter((ele2)=> !user?.following.some((item)=> item?._id=== ele2?._id))
           ?.slice(0,4)
       )
    },[user,allUsers])
    
    return (
        allUsers.length>0 ?
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-white h-max w-64 mt-6">
           <section className="flex flex-col gap-4">
               <p><strong>Who to follow</strong></p>
               <hr className="w-full bg-gray-400 h-px"/>
           </section>
           {suggestion.map((suggestUser)=>{
               return (
                <section className="flex flex-col gap-4" key={suggestUser?._id}>
                    <div className="flex flex-row justify-between items-center">
                    <img src={suggestUser?.profilePic}
                    alt="" className="h-10 w-10 object-cover rounded-full"/>
                    <p><strong>{suggestUser?.name}</strong></p>
                    <button className="bg-blue-400 rounded-2xl py-1 px-4 text-slate-50">Follow</button>
                    </div>
                    <hr className="w-full bg-gray-400 h-px"/>
                </section>
               )
           })}
        </div>:

        <div className="flex flex-col gap-4 p-4 rounded-xl bg-white h-max w-64 mt-6">
           <section className="flex flex-col gap-4">
               <p><strong>Who to follow</strong></p>
               <hr className="w-full bg-gray-400 h-px"/>
           </section>
           <div className="flex flex-row w-full justify-center items-center">
                <h3>No Suggestions</h3>
           </div>
        </div>
    )
}