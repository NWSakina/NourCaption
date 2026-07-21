const videoInput = document.getElementById("videoInput");
const fileName = document.getElementById("fileName");
const videoPreview = document.getElementById("videoPreview");

videoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    fileName.textContent = "الفيديو المختار: " + file.name;

    const videoURL = URL.createObjectURL(file);
    videoPreview.src = videoURL;
  } else {
    fileName.textContent = "لم يتم اختيار فيديو";
    videoPreview.src = "";
  }
});
