const { hash } = window.location;
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("p").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.querySelector("#message-input");
  const link = document.querySelector("#link-input");

  const card1 = document.querySelector("#message-form");
  const card2 = document.querySelector("#link-form");

  card1.classList.add("hide");
  card2.classList.remove("hide");

  const encrypted = btoa(input.value);
  link.value = `${window.location}#${encrypted}`;
  link.select();
});
