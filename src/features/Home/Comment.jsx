import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editComment,deleteComment } from "./postSlice";

export const Comment= ({comment,postId})=>{
    const {allUsers} = useSelector((state)=>state.user);
    const {user} = useSelector((state)=>state.auth);
    const dispatch =useDispatch();
    const [editModal,setEditModal]= useState(false);
    const [inputComment,setInputComment] = useState(comment.text)
    const [isEdit,setIsEdit] = useState(false);
    const userInfo= allUsers && allUsers?.find((commentUser)=>commentUser.username === comment.username);

    const editHandler=()=>{
        setIsEdit(false);
        dispatch(editComment({ postId: postId, commentId: comment._id, commentData: inputComment }));
    }
    return(
        <div className="w-full flex flex-row gap-3">
           <img src={userInfo?.profilePic}
           alt="" className="h-8 w-8 object-cover rounded-full"/>
           <section className="w-full flex flex-col gap-2 bg-slate-200 rounded-xl py-1 px-3 relative">
                <header className="w-full flex flex-row items-center justify-between">
                    <p className="text-sm font-semibold">{userInfo?.name}</p>
                   {comment.username=== user?.username && 
                   <span className={`cursor-pointer ${isEdit && "hidden"}`}
                   onClick={()=>setEditModal((curr)=>!curr)}
                   ><i class="fas fa-ellipsis-v text-sm text-gray-500"></i></span>}
                </header>
                {isEdit?
                <div className="flex flex-row gap-0.5">
                  <input type="text"  
                  value={inputComment}
                  onChange={(e)=>setInputComment(e.target.value)}
                  className="w-full text-sm focus:outline-none bg-slate-200 text-gray-600 border-b-2 border-gray-400"/>
                 <i className="fa fa-times-circle-o cursor-pointer text-gray-500"
                    aria-hidden="true"
                    onClick={() => setIsEdit(false)}/>
                 <i className="fa fa-check-circle-o cursor-pointer font-semibold ml-2 text-gray-500"
                    aria-hidden="true"
                    onClick={editHandler}/>
                </div>:
                 <p className="text-sm text-gray-500">{comment.text}</p>
                }
                
                {editModal && <div className="flex-flex-col py-1 bg-white rounded-lg gap-2 border border-slate-400 absolute right-5 top-4">
                    <section className="flex flex-row px-2 text-gray-500 gap-3 items-center cursor-pointer hover:bg-slate-200"
                    onClick={()=>{
                        setIsEdit(true);
                        setEditModal(false);
                    }}
                    >
                    <i class="far fa-edit text-sm"></i>
                    <p>Edit</p>
                    </section>
                    <section className="flex flex-row px-2  text-gray-500 gap-3 items-center cursor-pointer hover:bg-slate-200"
                    onClick={()=>{
                        dispatch(deleteComment({postId: postId, commentId: comment._id}))
                    }}
                    >
                    <i class="fas fa-trash text-sm"></i>
                    <p>Delete</p>
                    </section>
                </div>}
           </section>
        </div>
    )
}