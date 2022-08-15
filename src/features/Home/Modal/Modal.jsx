import "./Modal.css"

export const Modal=({setModal,postData,setPostData,postHandler})=>{
    return(
        <>
        <div className="backdrop">
            <div className="post-modal p-4 rounded-lg flex flex-col gap-4">
                <section className="flex flex-row text-gray-500 gap-4">
                   <span className="cursor-pointer" onClick={()=>setModal(false)}><i class="fas fa-chevron-left text-2xl"></i></span>
                   <span><i className="fas fa-user-circle text-2xl"></i></span>
                </section>
                <div>
                    <textarea 
                    value={postData}
                    className="w-full h-52 focus:outline-none bg-white p-3 border-none rounded-lg"
                    onChange={(e)=>setPostData(e.target.value)}
                    ></textarea>
                </div>
                <div className="w-full p-1 rounded-lg flex flex-row justify-center items-center bg-white h-12">
                    <button className="w-full h-full flex flex-row justify-center items-center text-white bg-blue-500 rounded-lg"
                    onClick={postHandler}
                    >Post</button>
                </div>
            </div>
        </div>
        </>
    )
}