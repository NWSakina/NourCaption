const videoInput = document.getElementById("videoInput");
const fileName = document.getElementById("fileName");

videoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    fileName.textContent = "الفيديو المختار: " + file.name;
  } else {
    fileName.textContent = "لم يتم اختيار فيديو";
  }
});

function testApp() {
  alert("NourCaption يعمل");
}
