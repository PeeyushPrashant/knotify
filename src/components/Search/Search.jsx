import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


export const Search=()=>{
    const {allUsers} = useSelector((state)=>state.user);
    const {user} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const [data,setData]= useState([]);
    const [input,setInput] = useState("");
    const timerId= useRef();

    useEffect(()=>{
         clearTimeout(timerId.current);
         if(input.trim().length>0)
         timerId.current = setTimeout(()=>{
           setData(
               allUsers?.filter((item)=>item.name.toLowerCase().includes(input.toLowerCase()))
           )
         },500)
    },[input])

    return(
        <>
        <div className="h-20 w-full sticky top-0 flex flex-col z-10  justify-end search-background ">
              <section>
              <span className="top-8 left-2.5 absolute"><i className="fas fa-search text-blue-400"></i></span>
              <input type="text" placeholder="Search" 
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              className="w-full h-10 bg-white border-none rounded-lg search-shadow mb-4  pl-12 outline-none text-gray-400"/>
              </section>
        </div>
        {input.trim().length>0 && (
              data.length>0?
              <div className="suggestion  bg-white z-11 mt-2 rounded-xl max-h-40 overflow-y-auto border-b-2 border-blue-400">
                  {data.map((userInfo)=>{
                      return(
                          <div className="px-4 py-2 gap-2  flex items-center cursor-pointer hover:bg-gray-100"
                          key={userInfo?._id}
                          onClick={()=>
                          {userInfo.userHandler===user.userHandler?
                          navigate("/profile"):navigate(`/user-profile/${userInfo?.userHandler}`)
                          setInput("")
                          }}
                          >
                         <img src={userInfo?.profilePic} alt={userInfo?.userHandler} className="h-6 w-6 object-cover rounded-full"/>
                         <span className="text-md text-gray-500 mr-1  ml-2 ">
                             {userInfo?.name}
                         </span>
                          </div>
                      )
                  })}
              </div>
              :
              <div className="suggestion bg-white z-11 mt-2 rounded-xl flex items-center px-4  h-10 border-b-2 border-blue-400">
                  No search found</div>
              )}
        </>
    )
}