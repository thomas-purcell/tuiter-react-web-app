import { faComment, faHeart, faRetweet, faShareAlt, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
  {
    tuit = {
      "_id": 123,
      "topic": "Space",
      "userName": "SpaceX",
      "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
      "time": "2h",
      "image": "tesla-logo.png",
      "liked": true,
      "replies": 123,
      "retuits": 432,
      "likes": 2345,
      "dislikes": 5678,
      "disliked": false,
      "handle": "@spacex",
      "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
  }
) => {
  const red = tuit.liked ? "text-danger" : "";
  const blue = tuit.disliked ? "text-primary" : "";
  const dispatch = useDispatch();

  const updateTuitLikes = () => {
    if (!tuit.liked) {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1,
        liked: true,
      }))
    } else {
      dispatch(updateTuitThunk({
        ...tuit,
        likes: tuit.likes - 1,
        liked: false,
      }))
    }
  }

  const updateTuitDislikes = () => {
    if (!tuit.disliked) {
      dispatch(updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes + 1,
        disliked: true,
      }))
    } else {
      dispatch(updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes - 1,
        disliked: false,
      }))
    }
  }

  return (
    <div className="row">
      <div className="col">
        <FontAwesomeIcon className="pe-2" icon={faComment} />
        {tuit.replies}
      </div>
      <div className="col">
        <FontAwesomeIcon className="pe-2" icon={faRetweet} />
        {tuit.retuits}
      </div>
      <div className="col">
        <FontAwesomeIcon onClick={updateTuitLikes} className={`pe-2 ${red}`} icon={faHeart} />
        {tuit.likes}
      </div>
      <div className="col">
        <FontAwesomeIcon onClick={updateTuitDislikes} className={`pe-2 ${blue}`} icon={faThumbsDown} />
        {tuit.dislikes}
      </div>
      <div className="col">
        <FontAwesomeIcon className="pe-2" icon={faShareAlt} />
      </div>
    </div>
  );
}

export default TuitStats;