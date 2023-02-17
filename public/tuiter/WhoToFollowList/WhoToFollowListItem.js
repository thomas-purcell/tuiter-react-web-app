const WhoToFollowListItem = (who) => {
  return (`
    <div class="list-group-item d-flex flex-row align-items-center">
      <div class="pe-3">
        <img class="rounded-circle image-avatar"
            src="${who.avatarIcon}"
            />
      </div>
      <div class="flex-grow-1">
        <div class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></div>
        <div class="text-secondary">@${who.handle}</div>
      </div>
      <div>
        <a class="btn btn-primary rounded-pill px-3" href="#">Follow</a>
      </div>
    </div>
  `);
}

export default WhoToFollowListItem;