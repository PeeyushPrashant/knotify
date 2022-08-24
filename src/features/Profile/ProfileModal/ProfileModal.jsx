import "./ProfileModal.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../../Authentication/authSlice";

export const ProfileModal=({setProfileModal})=>{
    const {user} = useSelector((state)=>state.auth);
    const dispatch= useDispatch();
    const [userForm,setUserForm] = useState({});
    const [loader,setLoader]= useState(false);


    const updateHandler=()=>{
           dispatch(updateUser({...userForm}));
           setProfileModal(false);
    }

    const updateImageHandler = async (image) => {
        setLoader(true);
        try {
          const data = new FormData();
          data.append("file", image);
          data.append("upload_preset", "bafblr2p");
          const requestOptions = {
            method: "POST",
            body: data,
          };
          await fetch("https://api.cloudinary.com/v1_1/doohtm4bs/image/upload", requestOptions)
            .then((response) => response.json())
            .then((json) => {
              setUserForm({ ...userForm, profilePic: json.url });
            })
            .catch((error) => {
              console.log(error);
            });
          setLoader(false);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        setUserForm(user)
    },[user])

    return (
        <div className="backdrop">
            <div className="profile-modal p-4 rounded-lg flex flex-col gap-4">
                <section>
                    <span onClick={()=>setProfileModal(false)}><i class="fas fa-chevron-left text-2xl cursor-pointer"></i></span>
                </section>
                <section className=" flex flex-row gap-7">
                    <p className="text-base text-gray-600">Avatar</p>
                    <div className="relative">
                        <img src={userForm.profilePic}
                        alt="" className="h-14 w-14 object-cover rounded-full"
                        />
                        <i class="fas fa-camera text-sm absolute cursor-pointer text-gray-600 bg-white rounded-full px-1 bottom-0 right-1"></i>
                        <input
                        className="cursor-pointer absolute bottom-0  right-1 opacity-0 w-8"
                        accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                        type="file"
                        onChange={(e)=>updateImageHandler(e.target.files[0])}
                />
                   </div>
                </section>
                <section className="w-full flex flex-row gap-11">
                    <p className="text-base text-gray-600">Link</p>
                    <input type="text" 
                    value={userForm.link}
                    className="w-full pl-2 h-7 bg-white border-none rounded-lg outline-none text-black text-sm"
                    onChange={(e)=>setUserForm({...userForm,link:e.target.value})}
                    />
                </section>
                <section className="w-full flex flex-row gap-14">
                    <p className="text-base text-gray-600">Bio</p>
                    <textarea value={userForm.bio}
                    className="w-full h-14 focus:outline-none bg-white pl-2 py-0.5 border-none rounded-lg text-sm"
                    onChange={(e)=>setUserForm({...userForm,bio:e.target.value})}
                    ></textarea>
                </section>
                <section className="w-full flex flex-row justify-end">
                    <button className="border-none rounded-lg px-4 py-1 bg-blue-500 text-white text-sm"
                    onClick={updateHandler}
                    >Update</button>
                </section>
            </div>
        </div>
    )
}