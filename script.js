import { loadFFmpeg } from "./ffmpeg.js";

const videoInput = document.getElementById("videoInput");
const fileName = document.getElementById("fileName");
const videoPreview = document.getElementById("videoPreview");
const processBtn = document.getElementById("processBtn");
const status = document.getElementById("status");

let selectedFile = null;

videoInput.addEventListener("change", function (event) {

  selectedFile = event.target.files[0];

  if (selectedFile) {

    fileName.textContent =
      "الفيديو المختار: " + selectedFile.name;

    status.textContent =
      "تم اختيار الفيديو بنجاح";

    const videoURL = URL.createObjectURL(selectedFile);

    videoPreview.src = videoURL;
    videoPreview.controls = true;

  } else {

    status.textContent =
      "لم يتم اختيار ملف";

  }

});

processBtn.addEventListener("click", async function () {

  if (!selectedFile) {

    status.textContent =
      "اختر فيديو أولًا";

    return;

  }

  try {

    status.textContent =
      "جاري تحميل FFmpeg...";

    await loadFFmpeg();

    status.textContent =
      "تم تحميل FFmpeg بنجاح ✅";

  } catch (error) {

    console.error(error);

    status.textContent =
      "فشل تحميل FFmpeg ❌";

  }

});
