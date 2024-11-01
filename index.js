// phew… not a lot going on here. Please add some code!
// von der card. und nicht vom document. auswählen
const firstCard = document.querySelector("[data-js='first_card']");
const bookmarkButton = firstCard.querySelector("[data-js='bookmark_button']");
bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
});