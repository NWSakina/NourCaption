import { createFFmpeg } from "https://unpkg.com/@ffmpeg/ffmpeg@0.11.6/dist/ffmpeg.min.js";

const ffmpeg = createFFmpeg({
  log: true,
  corePath:
    "https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js"
});

export async function loadFFmpeg() {

  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load();
  }

  return ffmpeg;
}

export default ffmpeg;
