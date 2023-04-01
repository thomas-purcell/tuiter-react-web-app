import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
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
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img width={48} className="rounded-circle" src={`/images/${tuit.image}`} />
        </div>
        <div className="col-11">
          <div className="ps-3">
            <div>
              <span className="fw-bold">{tuit.userName}</span>
              <FontAwesomeIcon className="ps-2" icon={faCheckCircle} />
              <span className="ps-2">{tuit.handle} &#8226; {tuit.time}</span>
              <i className="bi bi-x-lg float-end"
                onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <div className="pb-3">
              {tuit.tuit}
            </div>
            <TuitStats tuit={tuit} />
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;