import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";
const ExploreComponent = () => {
  return (
    <>
      <div id="explore-search-bar" className="flex-row d-flex align-items-center mb-2">
        <div className="flex-grow-1 flex-row d-flex align-items-center border rounded-pill py-1 form-control">
          <label htmlFor="explore-search-input" className="px-2">
            <FontAwesomeIcon icon={faSearch}/>
          </label>
          <input type="text" id="explore-search-input"
            className="flex-grow-1 wd-no-border rounded-pill ps-2" placeholder="Search Tuiter" />
        </div>
        <div className="ps-4">
          <a href="explore-settings.html">
            <FontAwesomeIcon icon={faCog} size={"2x"} className="align-middle text-primary"/>
          </a>
        </div>
      </div>
      <div className="nav nav-tabs mb-2">
        <div className="nav-item">
          <a className="nav-link active" aria-current="page" href="for-you.html">For you</a>
        </div>
        <div className="nav-item">
          <a className="nav-link" href="trending.html">Trending</a>
        </div>
        <div className="nav-item">
          <a className="nav-link" href="news.html">News</a>
        </div>
        <div className="nav-item">
          <a className="nav-link" href="sports.html">Sports</a>
        </div>
        <div className="nav-item d-none d-md-block">
          <a className="nav-link" href="entertainment.html">Entertainment</a>
        </div>
      </div>
      <div className="card rounded-0">
        <img src="/images/spacex-starship.webp" className="card-img rounded-0" />
        <div className="card-img-overlay d-flex flex-column ps-2 pb-0">
          <h2 className="card-title mt-auto mb-1 text-white">SpaceX Starship</h2>
        </div>
      </div>
      <PostSummaryList />
    </>
  );
};
export default ExploreComponent;