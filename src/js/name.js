export default function saveName() {
  const input = document.querySelector("#name");

  if (localStorage.getItem("name") !== null) {
    input.value = localStorage.getItem("name");
  }

  input.addEventListener("input", (e) => {
    localStorage.setItem("name", input.value);
  });
}
