import { Aside,FollowCard,Search } from "../../components"
import { useSelector } from "react-redux"
import { SinglePost } from "../Home/SinglePost";
import { Modal } from "../Home/Modal/Modal";

export const Explore=()=>{
    const {allPosts} = useSelector((state)=>state.post);
    const {postModal}= useSelector((state)=>state.postModal); 
    const sortedPosts= [...allPosts]?.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    return(
        <div className="flex flex-row justify-center w-10/12 gap-6 m-auto ">
            <Aside/>
            <div className="flex flex-col w-5/12 gap-7 mb-6">
             <Search/>

             {sortedPosts.length>0 && sortedPosts.map((post)=>{
                 return(
                     <SinglePost
                     key={post._id}
                     post={post}
                     />
                 )
             })}
            </div>
             {postModal && <Modal/>}
            <FollowCard/>
        </div>
    )
}