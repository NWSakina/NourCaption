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

videoInput.addEventListener("change", (event) => {
    selectedFile = event.target.files[0];

    if (selectedFile) {
        fileName.textContent = "الفيديو المختار: " + selectedFile.name;
        status.textContent = "تم اختيار الفيديو بنجاح";

        const url = URL.createObjectURL(selectedFile);
        videoPreview.src = url;
        videoPreview.controls = true;
    }
});

addTextBtn.addEventListener("click", () => {
    if (textInput.value.trim() === "") {
        textLayer.style.display = "none";
        return;
    }

    textLayer.textContent = textInput.value;
    textLayer.style.display = "block";
});

processBtn.addEventListener("click", async () => {
    if (!selectedFile) {
        status.textContent = "اختر فيديو أولاً";
        return;
    }

    try {
        status.textContent = "تحميل محرك الكلام...";
        await loadSpeechEngine(status);

        status.textContent = "استخراج الصوت...";
        await extractAudio(selectedFile);

        status.textContent = "تم استخراج الصوت بنجاح";
    } catch (error) {
        console.error(error);
        alert(error.message);
        status.textContent = error.message;
    }
});
