import { loadSpeechEngine } from "./speech.js";
import { extractAudio } from "./audio.js";

const videoInput = document.getElementById("videoInput");
const fileName = document.getElementById("fileName");
const videoPreview = document.getElementById("videoPreview");
const processBtn = document.getElementById("processBtn");
const status = document.getElementById("status");

const textInput = document.getElementById("textInput");
const addTextBtn = document.getElementById("addTextBtn");
const textLayer = document.getElementById("textLayer");

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

addTextBtn.addEventListener("click", function () {

    if (textInput.value.trim() === "") {

        textLayer.style.display = "none";
        return;

    }

    textLayer.textContent = textInput.value;
    textLayer.style.display = "block";

});

processBtn.addEventListener("click", async function () {

    if (!selectedFile) {

        status.textContent = "اختر فيديو أولًا";
        return;

    }

    try {

        status.textContent = "جاري تحميل محرك الكلام...";

        await loadSpeechEngine(status);

        status.textContent = "جاري استخراج الصوت...";

        await extractAudio(selectedFile);

        status.textContent = "تم استخراج الصوت بنجاح";

    } catch (error) {

        status.textContent = error.message;

    }

});
