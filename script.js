const videoInput = document.getElementById("videoInput");
const fileName = document.getElementById("fileName");
const videoPreview = document.getElementById("videoPreview");
const processBtn = document.getElementById("processBtn");
const status = document.getElementById("status");

videoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    fileName.textContent = "الفيديو المختار: " + file.name;

    const videoURL = URL.createObjectURL(file);
    videoPreview.src = videoURL;
  }
});

processBtn.addEventListener("click", function () {
  status.textContent = "جاري تجهيز الفيديو...";
});
