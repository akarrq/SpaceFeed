export default function spinner(key) {
  switch (key) {
    case "ADD":
      const element = document.createElement("div");
      element.classList.add("my-5", "mx-5", "w-100", "spinner");
      element.innerHTML = `
        <div class="d-flex align-items-center mx-5">
          <strong>Loading... </strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
        `;
      document.querySelector("#articlesList").appendChild(element);
      break;
    case "REMOVE":
      document.querySelector(".spinner").remove();
      break;
    default:
      break;
  }
}
