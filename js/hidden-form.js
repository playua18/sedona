var link = document.querySelector(".offer-form-title");
var hide = document.querySelector(".hidden-form");
link.addEventListener("click", function(event) {
  event.preventDefault();
  if (hide.classList.contains("hidden-form-show")){
  hide.classList.remove("hidden-form-show");
}
else {
  event.preventDefault();
  hide.classList.add("hidden-form-show");
}
});

