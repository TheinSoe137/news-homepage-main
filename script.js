menuBox.addEventListener("click", () => {
  console.log(links);
  links.classList.toggle("activate");
  links.classList.contains("activate")
    ? (menuBox.innerHTML = `  <img
id="menuIcon"
src="./assets/images/icon-menu-close.svg"
alt="icon-menu-close"
/>`)
    : (menuBox.innerHTML = `  <img
id="menuIcon"
src="./assets/images/icon-menu.svg"
alt="icon-menu-open"
/>`);
  //switchIcon();
});
// function switchIcon() {
//   if (links.classList.contains("activate")) {
//     menuBox.innerHTML = `  <img
//   id="menuIcon"
//   src="./assets/images/icon-menu-close.svg"
//   alt="icon-menu-close"
// />`;
//   } else {
//     menuBox.innerHTML = `  <img
//     id="menuIcon"
//     src="./assets/images/icon-menu.svg"
//     alt="icon-menu-open"
//   />`;
//   }
// }
