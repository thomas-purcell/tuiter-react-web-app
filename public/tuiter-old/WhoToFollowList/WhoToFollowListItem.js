const WhoToFollowListItem = (who) => {
  return (`
    <div class="list-group-item p-lg-2 d-flex flex-row align-items-center">
      <div class="pe-3 pe-lg-2">
        <img class="rounded-circle image-avatar"
            src="${who.avatarIcon}"
            />
      </div>
      <div class="flex-grow-1">
        <div class="fw-bold">${who.userName} <i class="fas fa-check-circle"></i></div>
        <div class="text-secondary">@${who.handle}</div>
      </div>
      <div class="">
        <a class="btn btn-primary rounded-pill px-3 float-end" href="#">
          <span class="w-100">Follow</span>
        </a>
      </div>
    </div>
  `);
}

export default WhoToFollowListItem;