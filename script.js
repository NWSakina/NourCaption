import ffmpeg from "./ffmpeg.js";

const videoInput = document.getElementById("videoInput");
const fileName = document.getElementById("fileName");
const videoPreview = document.getElementById("videoPreview");
const processBtn = document.getElementById("processBtn");
const status = document.getElementById("status");

let selectedFile = null;

videoInput.addEventListener("change", function () {
  selectedFile = this.files[0];

  if (selectedFile) {
    fileName.textContent = "الفيديو المختار: " + selectedFile.name;
    videoPreview.src = URL.createObjectURL(selectedFile);
  }
});

processBtn.addEventListener("click", async function () {

  if (!selectedFile) {
    status.textContent = "اختر فيديو أولًا";
    return;
  }

  try {
    status.textContent = "1- بدأ التحميل...";

    await ffmpeg.load();

    status.textContent = "2- المحرك جاهز";

  } catch (error) {
    status.textContent = "حدث خطأ في تحميل المحرك";
    console.log(error);
  }

});
