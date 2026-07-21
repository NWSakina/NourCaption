const videoInput = document.getElementById("videoInput");
const fileName = document.getElementById("fileName");
const videoPreview = document.getElementById("videoPreview");
const processBtn = document.getElementById("processBtn");
const status = document.getElementById("status");

let selectedFile = null;

if (!videoInput) {
  alert("لم يتم العثور على زر اختيار الفيديو");
}

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

processBtn.addEventListener("click", function () {

  if (!selectedFile) {

    status.textContent =
      "اختر فيديو أولًا";

    return;

  }

  status.textContent =
    "الفيديو جاهز للمعالجة";

});
