function showImageDialog(img) {
  const dialog = document.createElement("dialog");
  dialog.appendChild(img.cloneNode());

  const close = () => {
    dialog.close();
    dialog.remove();
  };
  dialog.addEventListener("cancel", close);
  dialog.addEventListener("click", close);
  dialog.addEventListener("close", close);
  dialog.addEventListener("keydown", close);

  document.body.appendChild(dialog);
  dialog.showModal();
}

window.addEventListener("load", () => {
  gallery.addEventListener("click", (event) => {
    if (event.target.localName === "img") {
      event.stopPropagation();
      showImageDialog(event.target);
    }
  });
});
