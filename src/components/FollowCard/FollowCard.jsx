

export const FollowCard=()=>{
    return(
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-white h-max w-64 mt-6">
           <section className="flex flex-col gap-4">
               <p><strong>Who to follow</strong></p>
               <hr className="w-full bg-gray-400 h-px"/>
           </section>
           <section className="flex flex-col gap-4">
               <div className="flex flex-row justify-between items-center">
               <img src="https://res.cloudinary.com/doohtm4bs/image/upload/v1659861766/Social%20Media/FollowCard/cr7_egtiki.jpg" 
               alt="" className="h-10 w-10 object-cover rounded-full"/>
               <p><strong>Cristiano</strong></p>
               <button className="bg-blue-500 rounded-2xl py-1 px-4 text-slate-50">Follow</button>
               </div>
               <hr className="w-full bg-gray-400 h-px"/>
            </section>
            <section className="flex flex-col gap-4">
               <div className="flex flex-row justify-between items-center">
               <img src="https://res.cloudinary.com/doohtm4bs/image/upload/v1659861764/Social%20Media/FollowCard/apd_getpum.jpg" 
               alt="" className="h-10 w-10 object-cover rounded-full"/>
               <p><strong>APD</strong></p>
               <button className="bg-blue-500 rounded-2xl py-1 px-4 text-slate-50">Follow</button>
               </div>
               <hr className="w-full bg-gray-400 h-px"/>
            </section>
            <section className="flex flex-col gap-4">
               <div className="flex flex-row justify-between items-center">
               <img src="https://res.cloudinary.com/doohtm4bs/image/upload/v1659861764/Social%20Media/FollowCard/virat_vzi9pb.jpg" 
               alt="" className="h-10 w-10 object-cover rounded-full"/>
               <p><strong>Virat</strong></p>
               <button className="bg-blue-500 rounded-2xl py-1 px-4 text-slate-50">Follow</button>
               </div>
               <hr className="w-full bg-gray-400 h-px"/>
            </section>
        </div>
    )
}