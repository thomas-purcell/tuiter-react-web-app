import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return (`
  <div class="list-group">
    ${posts.map((p) => PostSummaryItem(p)).join('')}
  </div>
  `);
}

export default PostSummaryList;