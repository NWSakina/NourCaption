const videoInput = document.querySelector('input[type="file"]');

videoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    alert("تم اختيار الفيديو: " + file.name);
  }
});
