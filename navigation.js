function closeNavigationMenus() {
  document.querySelectorAll(".nav-group[data-open='true']").forEach((group) => {
    group.dataset.open = "false";
    const toggle = group.querySelector(".nav-toggle");
    if (toggle) {
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".nav-group").forEach((group) => {
  const link = group.querySelector(".nav-link");
  if (!link || group.querySelector(".nav-toggle")) {
    return;
  }

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "nav-toggle";
  toggle.setAttribute("aria-label", `Open submenu voor ${link.textContent.trim()}`);
  toggle.setAttribute("aria-expanded", "false");
  toggle.innerHTML = "<span></span>";

  toggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const willOpen = group.dataset.open !== "true";
    closeNavigationMenus();
    if (willOpen) {
      group.dataset.open = "true";
      toggle.setAttribute("aria-expanded", "true");
    }
  });

  group.append(toggle);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-group")) {
    closeNavigationMenus();
  }
});
