import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "I love to write blogs, it's my way of expressing myself",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ravi4596@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "prashantpeeyush@gmail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "adityaraj@gmail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "hrishikesh@gmail.com",
        text: "Great!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Good Morning, What's your plan for the coming weekend ?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hrishikesh@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "samyak@gmail.com",
        text: "Looks Good To Me",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rahulbakshi@gmail.com",
        text: "Trekking",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Knotify is the best app",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rahulbakshi@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "hrishikesh@gmail.com",
        text: "Yehh....I am using it",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "vinitkanse@gmail.com",
        text: "It's an awesome platform",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T16:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "You can change your next 5 years life in 6 months by doing hard work",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hrishikesh@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "ravi4596@gmail.com",
        text: "Yeh meri expertise bilkul nhi hai",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-02-25T08:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "You have confidence in your fears not your dreams. Hahaha.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prashantpeeyush@gmail.com",
    bookmark: [],
    comments: [],
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Neog is the best bootcamp for Web Dev",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vinitkanse@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "adityaraj@gmail.com",
        text: "Yeh badi acchi baat kahi aapne",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "samyak@gmail.com",
        text: "Definetly",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2020-04-23T15:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I love to write blogs, it's my way of expressing myself",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "prashantpeeyush@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "hrishikesh@gmail.com",
        text: "I read your blog on debouncing, it was amazing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-04-01T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "A founder gave an employee 10 days off during the notice period so that the employee could visit his sick grandmother",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "samyak@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "prashantpeeyush@gmail.com",
        text: "Thats amazing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "ravi4596@gmail.com",
        text: "Good to hear that",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2021-04-30T10:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Don’t ask questions whose answers you can’t accept.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adityaraj@gmail.com",
    bookmark: [],
    comments: [],
    createdAt: "2022-03-14T20:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Learn JavaScript in 60 minutes and then spend 9 months finding job.  Better to spend time on basics, build core and then find a job. 12 months is the least you should spend from your first program to job.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "vinitkanse@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "rahulbakshi@gmail.com",
        text: "Working hard always pays off",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-05-13T07:55:12+05:30",
    updatedAt: formatDate(),
  },
];
