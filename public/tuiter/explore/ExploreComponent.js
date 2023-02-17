import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div id="explore-search-bar" class="flex-row d-flex align-items-center mb-2">
        <div class="flex-grow-1 flex-row d-flex align-items-center border rounded-pill py-1 form-control">
          <label for="explore-search-input" class="px-2">
            <i class="fas fa-search"></i>
          </label>
          <input type="text" id="explore-search-input"
                class="flex-grow-1 no-border rounded-pill ps-2" placeholder="Search Tuiter"/>
        </div>
        <div class="ps-4">
          <a href="explore-settings.html">
            <i class="fas fa-cog fa-2x align-middle text-primary"></i>
          </a>
        </div>
    </div>
    <div class="nav nav-tabs mb-2">
      <div class="nav-item">
        <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </div>
      <div class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </div>
      <div class="nav-item d-none d-md-block">
        <a class="nav-link" href="entertainment.html">Entertainment</a>
      </div>
    </div>
    <div class="card rounded-0">
      <img src="../../images/spacex-starship.webp" class="card-img rounded-0"/>
      <div class="card-img-overlay d-flex flex-column ps-2 pb-0">
        <h2 class="card-title mt-auto mb-1">SpaceX's Starship</h1>
      </div>
    </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;
