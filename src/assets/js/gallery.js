function showImageDialog(img) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `
    <img src="${img.src}" alt="${img.alt}" />
    <!-- <button>Close</button> -->
  `;
  // dialog.querySelector("button").addEventListener("click", () => {
  //   dialog.close();
  // });
  const close = () => {
    dialog.close();
    dialog.remove();
  };
  dialog.addEventListener("cancel", close);
  dialog.addEventListener("click", close);
  dialog.addEventListener("close", close);
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
