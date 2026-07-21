import ffmpeg from "./ffmpeg.js";
import { loadFFmpeg } from "./ffmpeg.js";

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

    const videoURL = URL.createObjectURL(selectedFile);
    videoPreview.src = videoURL;
  }
});

processBtn.addEventListener("click", async function () {

  if (!selectedFile) {
    status.textContent = "اختر فيديو أولًا";
    return;
  }

  try {
    status.textContent = "جاري تحميل المحرك...";

    await loadFFmpeg();

    status.textContent = "المحرك جاهز";

  } catch (error) {

    console.error(error);
    status.textContent = "خطأ في تحميل المحرك";

  }

});
