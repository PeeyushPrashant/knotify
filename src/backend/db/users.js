import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    name: "Prashant Peeyush",
    username: "prashantpeeyush@gmail.com",
    password: "prashant123",
    userHandler: "prashant3003",
    bio: "An aspiring web developer",
    profilePic:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1659945809/Social%20Media/FollowCard/20200126_135554_d9f9p7_nrv5kx.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Ravi Ranjan",
    username: "ravi4596@gmail.com",
    password: "ravi123",
    userHandler: "coolravi",
    bio: "Coder & an enthusiastic learner",
    profilePic:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1659861764/Social%20Media/FollowCard/virat_vzi9pb.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Vinit Kanse",
    username: "vinitkanse@gmail.com",
    password: "vinit123",
    userHandler: "vinc3nati",
    bio: "A nature lover",
    profilePic:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1659861764/Social%20Media/FollowCard/apd_getpum.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Aditya Raj",
    username: "adityaraj@gmail.com",
    password: "aditya123",
    userHandler: "smartyboy",
    bio: "Cricket freak & MSD follower",
    profilePic:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1659945239/Social%20Media/FollowCard/msd_bbtubr.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Hrishi",
    username: "hrishikesh@gmail.com",
    password: "hrishi123",
    userHandler: "something_Js",
    bio: "Football freak & Cristiano follower",
    profilePic:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1659861766/Social%20Media/FollowCard/cr7_egtiki.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Rahul Bakshi",
    username: "rahulbakshi@gmail.com",
    password: "rahul123",
    userHandler: "megaboy",
    bio: "Listening to spotify",
    profilePic:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1659945478/Social%20Media/FollowCard/range_rover_n3d1zp.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    name: "Samyak Shah",
    username: "samyak@gmail.com",
    password: "samyak123",
    userHandler: "shahsamyak",
    bio: "Learning & Building",
    profilePic:
      "https://res.cloudinary.com/doohtm4bs/image/upload/v1659945723/Social%20Media/FollowCard/home_dkohcb.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
