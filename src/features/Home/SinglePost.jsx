import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addAndRemoveBookmark,addComment } from "./postSlice";
import { Comment } from "./Comment";

export const SinglePost=({post})=>{
    const {user} = useSelector((state)=>state.auth);
    const {allUsers}= useSelector((state)=>state.user);
    const [viewAll,setViewAll] = useState(2);
    const [comment,setComment] = useState("");
    const dispatch = useDispatch();
    const {
        _id,
        content,
        username,
        likes: { likeCount, likedBy, dislikedBy },
        bookmark,
        comments,
        createdAt,
      } = post;

      const userInfo= allUsers.find((post)=>post.username === username);
      const isBookMarked = bookmark?.some((bookMarkedPost)=> bookMarkedPost.username === user.username);

      const date= new Date(createdAt);
      const [year,month,day,hour,minute]= [
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes()
      ]
      const addAndRemoveBookmarkHandler=()=>{
            dispatch(addAndRemoveBookmark({postId:_id, isBookMark : isBookMarked?false:true}))
      }
      const postCommentHandler=()=>{
          viewAll>2 && setViewAll((prev)=>prev+1);
          dispatch(addComment({postId:_id,commentData:comment}));
          setComment("");
      }
    return(
        <div className="w-full gap-4 bg-white rounded-lg p-4 flex flex-col justify-center">
            <header className="flex flex-row gap-2  items-center">
            <img src={userInfo?.profilePic}
               alt="" className="h-12 w-12 object-cover rounded-full"/>
               <div className="flex flex-col gap-1 ">
                   <section className="flex flex-row gap-2 items-center">
                   <h4 className="text-slate-800 font-semibold">{userInfo?.name}</h4>
                   <p className="text-gray-400 text-sm">@{userInfo?.userHandler}</p>
                   </section>
                   <p className="text-gray-400 text-sm">{`${year}/${month}/${day}  ${hour}:${minute}`}</p>
               </div>
            </header>
            <section className="text-gray-700">{content}</section>
            <section className="flex flex-row gap-4 items-center text-gray-500">
                  <div className="flex flex-row items-center gap-1 cursor-pointer">
                      <i className="far fa-heart text-sm"></i>  
                      <p>Like</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 cursor-pointer"
                  onClick={addAndRemoveBookmarkHandler}
                  >
                  {isBookMarked?<i class="fas fa-bookmark text-sm"></i> :<i className="far fa-bookmark text-sm"></i> } 
                  <p>{isBookMarked?"Bookmarked": "Bookmark"}</p>
                  </div>
            </section>
            <footer className="w-full flex flex-row gap-1.5 items-center">
            <img src={userInfo?.profilePic} 
               alt="" className="h-8 w-8 object-cover rounded-full"/> 
            <div className="relative w-full">
            <input type="text" className="w-full h-9 pl-2 rounded-lg placeholder:text-gray-400 border border-slate-500 outline-none"
             placeholder="Enter your comment"
             value={comment}
             onChange={(e)=>setComment(e.target.value)}
            /> 
            <button className={`absolute border-none text-sm text-blue-500 right-2 top-2 font-bold cursor-pointer 
            ${comment.trim().length<1 && "cursor-not-allowed"}`} 
            onClick={postCommentHandler}
            disabled={comment.trim().length<1?true:false}>POST</button>
            </div>
            </footer>
           {comments.length>0 && 
           [...comments].slice(0,viewAll).map((comment)=>{
               return (
                   <Comment
                   key={comment._id}
                   comment={comment}
                   postId={_id}
                   />
               )
           })
           }
           {comments.length>2 && 
           <p className="text-gray-500 cursor-pointer underline text-sm hover:text-gray-700 pl-12"
           onClick={()=>setViewAll(viewAll<=2?comments.length:2)}
           >
              {viewAll<=2 ? "View All Comments":"Hide Comments"}
           </p>
           }
        </div>
    )
}