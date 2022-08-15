import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { handleSignup } from "./authSlice";
import {useSelector, useDispatch} from "react-redux"

export const Signup=()=>{
    const navigate=useNavigate();
    const [signup,setSignup]= useState({name:"",email:"",password:""});
    const dispatch= useDispatch();

    const submitSignupDetails=(e)=>{
        e.preventDefault();
      dispatch(
          handleSignup({username:signup.email,password:signup.password,name:signup.name})
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
                <h3 className="m-0 text-2xl">Sign Up</h3>
                <hr className="bg-blue-500 w-full h-0.5"/>
                <section className="w-full flex flex-col gap-2">
                <p className="font-medium">Name</p>
                    <input type="text" placeholder="Name" className="px-2 py-1.5 w-full rounded-lg border-solid border-2 border-slate-300 outline-blue-500 text-black" required
                    onChange={(e)=>setSignup({...signup,name:e.target.value})}
                    />
                    <p className="font-medium">Username or Email</p>
                    <input type="email" placeholder="Email" className="px-2 py-1.5 w-full rounded-lg border-solid border-2 border-slate-300 outline-blue-500 text-black" required
                     onChange={(e)=>setSignup({...signup,email:e.target.value})}
                    />
                    <p className="font-medium">Password</p>
                    <input type="password" placeholder="Password" className="px-2 py-1.5 w-full rounded-lg border-solid border-2 border-slate-300 outline-blue-500 text-black" required
                     onChange={(e)=>setSignup({...signup,password:e.target.value})}
                    />
                </section>
                <button className="bg-blue-500 w-full rounded-lg border-none py-2 text-white text-center cursor-pointer"
                onClick={submitSignupDetails}
                >Create Account</button>
                <p className="font-medium cursor-pointer"
                onClick={()=>navigate("/login")}
                >Already have an account?</p>
            </div>
        </div>
        </>
    )
}