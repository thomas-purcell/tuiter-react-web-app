import { faComment, faHeart, faRetweet, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const TuitStats = (
  {
    stats = {
      liked: true,
      likes: 100,
      retuits: 200,
      replies: 300,
    }
  }
) => {
  const red = stats.liked ? "text-danger" : "";
  return (
    <div className="row">
      <div className="col-3">
        <FontAwesomeIcon className="pe-2" icon={faComment}/>
        {stats.replies}
      </div>
      <div className="col-3">
        <FontAwesomeIcon className="pe-2" icon={faRetweet} />
        {stats.retuits}
      </div>
      <div className="col-3">
        <FontAwesomeIcon className={`pe-2 ${red}`} icon={faHeart} />
        {stats.likes}
      </div>
      <div className="col-3">
        <FontAwesomeIcon className="pe-2" icon={faShareAlt} />
      </div>
    </div>
  );
}

export default TuitStats;