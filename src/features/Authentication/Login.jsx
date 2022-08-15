import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { handleLogin } from "./authSlice";
import { useSelector,useDispatch } from "react-redux";

export const Login=()=>{
    const navigate= useNavigate();
    const [login,setLogin]= useState({email:"",password:""});
    const dispatch= useDispatch();

    const testUser=()=>{
          setLogin({email:"adarshbalika@gmail.com",password:"adarshBalika123"})
    }
    const submitLoginDetails=(e)=>{
        e.preventDefault();
    //    if(e.innerText==="Sign In With Test")
    //      setLogin({email:"adarshbalika",password:"adarshBalika123"})
        dispatch(
            handleLogin({username:login.email,password:login.password})
        )
    }
    return(
        <>
        <div className="w-screen h-screen flex flex-row justify-center items-center ">
            <div className="px-10 py-6 flex flex-col gap-5 justify-center items-center bg-white shadow rounded text-black">
                <header className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-blue-500 m-0 text-4xl h1-heading">Welcome To Knotify</h1>
                     <p className="text-blue-500 text-lg">Creating Network</p>
                </header>
                <h3 className="m-0 text-2xl">Sign In</h3>
                <hr className="bg-blue-500 w-full h-0.5"/>
                <section className="w-full flex flex-col gap-2">
                    <p className="font-medium">Username or Email</p>
                    <input type="email" placeholder="Email" value={login.email} className="px-2 py-1.5 w-full rounded-lg border-solid border-2 border-slate-300 outline-blue-500 text-black" required
                    onChange={(e)=>setLogin({...login,email:e.target.value})}
                    />
                    <p className="font-medium">Password</p>
                    <input type="password" placeholder="Password" value={login.password} className="px-2 py-1.5 w-full rounded-lg border-solid border-2 border-slate-300 outline-blue-500 text-black" required
                    onChange={(e)=>setLogin({...login,password:e.target.value})}
                    />
                </section>
                <button className="bg-blue-500 w-full rounded-lg border-none py-2 text-white text-center cursor-pointer"
                onClick={submitLoginDetails}
                >Sign In</button>
                <button className="bg-white w-full rounded-lg border-2 border-blue-500 py-2 text-center cursor-pointer"
                onClick={testUser}
                >
                    Sign In With Test
                    </button>
                <p className="font-medium cursor-pointer"
                onClick={()=>navigate("/signup")}
                >Create New Account</p>
            </div>
        </div>
        </>
    )
}